import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) {}
  async create(createUtilisateurDto: CreateUtilisateurDto) {
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
        email: createUtilisateurDto.email,
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
    const user = await this.prisma.utilisateur.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(
        `Utilisateur avec l'identifiant ${id} introuvable`,
      );
    }
    updateUtilisateurDto.date_naissance = new Date(
      updateUtilisateurDto.date_naissance,
    );
    // Perform the update
    const updatedUser = await this.prisma.utilisateur.update({
      where: { id },
      data: updateUtilisateurDto,
    });

    // Return the updated user (without password)
    const { password, ...result } = updatedUser;
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
