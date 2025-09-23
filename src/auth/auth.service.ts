import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.prisma.utilisateur.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(login: LoginDto) {
    const user = await this.validateUser(login.email, login.password);
    if (user !== null) {
      const payload = { sub: user.id, email: user.email, role: user.role };
      return {
        user: user,
        token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }

  async register(data: RegisterDto) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.date_naissance = new Date(data.date_naissance);
      const payload = { email: data.email, role: data.role };
      const access_token = this.jwtService.sign(payload);
      const user = await this.prisma.utilisateur.create({
        data: {
          CIN: data.CIN,
          role: data.role,
          prenom: data.prenom,
          nom: data.nom,
          date_naissance: data.date_naissance,
          numero_telephone: data.numero_telephone,
          adresse: data.adresse,
          email: data.email,
          password: hashedPassword,
        },
      });
      const { password, ...userWithoutPassword } = user;
      return {
        user: userWithoutPassword,
        token: access_token,
      };
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UnprocessableEntityException(
            `Un utilisateur avec ce email (${data.email}) existe déjà.`,
          );
        }
      }
      throw new BadRequestException(
        "Impossible de créer l'utilisateur. Vérifiez les données.",
      );
    }
  }

  async updatePassword(userId: number, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.prisma.utilisateur.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new UnauthorizedException('Utilisateur introuvable');
    }

    // Verify old password
    const isOldPasswordValid = await bcrypt.compare(
      updatePasswordDto.oldPassword,
      user.password,
    );
    if (!isOldPasswordValid) {
      throw new BadRequestException("L'ancien mot de passe est incorrect.");
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(
      updatePasswordDto.newPassword,
      10,
    );

    // Update password in DB
    await this.prisma.utilisateur.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    return { message: 'Password updated successfully' };
  }
}
