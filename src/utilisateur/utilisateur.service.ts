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
    return 'This action adds a new utilisateur';
  }

  findAll() {
    return this.prisma.utilisateur.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} utilisateur`;
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
