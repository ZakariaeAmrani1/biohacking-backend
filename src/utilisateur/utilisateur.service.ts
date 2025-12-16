import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) {}
  async create(createUtilisateurDto: CreateUtilisateurDto) {
  // 1. Check for existing user with either Email OR CIN
  const existingUser = await this.prisma.utilisateur.findFirst({
    where: {
      OR: [
        { email: createUtilisateurDto.email.toLowerCase() },
        { CIN: createUtilisateurDto.CIN },
      ],
    },
  });

  // 2. If a user was found, determine which field matched and throw specific error
  if (existingUser) {
    if (existingUser.email.toLowerCase() === createUtilisateurDto.email.toLowerCase()) {
      throw new ConflictException('Email est déja utilisé');
    }
    if (existingUser.CIN === createUtilisateurDto.CIN) {
      throw new ConflictException('CIN est déja utilisé.');
    }
  }

  // 3. If no conflict, proceed
  const hashedPassword = await bcrypt.hash(createUtilisateurDto.password, 10);
  
  const user = await this.prisma.utilisateur.create({
    data: {
      CIN: createUtilisateurDto.CIN,
      role: createUtilisateurDto.role,
      prenom: createUtilisateurDto.prenom,
      nom: createUtilisateurDto.nom,
      date_naissance: createUtilisateurDto.date_naissance,
      numero_telephone: createUtilisateurDto.numero_telephone,
      adresse: createUtilisateurDto.adresse,
      email: createUtilisateurDto.email.toLowerCase(),
      password: hashedPassword,
    },
  });

  return user;
}

  findAll() {
    return this.prisma.utilisateur.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.utilisateur.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`user #${id} not found`);
    return user;
  }

 async update(id: number, updateUtilisateurDto: any) {
  // 1. Check if the user exists first
  const user = await this.prisma.utilisateur.findUnique({ where: { id } });
  if (!user) {
    throw new NotFoundException(
      `Utilisateur avec l'identifiant ${id} introuvable`,
    );
  }

  // 2. Dynamic Conflict Check (Only check fields that are actually being updated)
  const conflictChecks = [] as any;
  if (updateUtilisateurDto.email) conflictChecks.push({ email: updateUtilisateurDto.email });
  if (updateUtilisateurDto.CIN) conflictChecks.push({ CIN: updateUtilisateurDto.CIN });

  if (conflictChecks.length > 0) {
    const conflictUser = await this.prisma.utilisateur.findFirst({
      where: {
        OR: conflictChecks,
        NOT: { id: id }, // <--- CRITICAL: Ignore the current user in the check
      },
    });

    if (conflictUser) {
      if (updateUtilisateurDto.email && conflictUser.email === updateUtilisateurDto.email) {
        throw new ConflictException('Email est déja utilisé.');
      }
      if (updateUtilisateurDto.CIN && conflictUser.CIN === updateUtilisateurDto.CIN) {
        throw new ConflictException('CIN est déja utilisé.');
      }
    }
  }

  // 3. Handle Date format if it exists
  if (updateUtilisateurDto.date_naissance) {
    updateUtilisateurDto.date_naissance = new Date(
      updateUtilisateurDto.date_naissance,
    );
  }

  // 4. Perform the update
  const updatedUser = await this.prisma.utilisateur.update({
    where: { id },
    data: updateUtilisateurDto,
  });

  // Return the updated user (without password)
  const { password, ...result } = updatedUser;
  return result;
}

  async remove(id: number) {
    try {
      const user = await this.prisma.utilisateur.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException(
          `Utilisateur avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.utilisateur.delete({ where: { id: id } });
      return user;
    } catch (error) {
      throw new BadRequestException(
        "Impossible de supprimé l' Utilisateur. Vérifiez les données.",
      );
    }
  }
}
