import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BienType, Prisma } from '@prisma/client';

@Injectable()
export class BienService {
  constructor(private prisma: PrismaService) {}

  async create(createBienDto: CreateBienDto) {
    try {
      return await this.prisma.bien.create({
        data: {
          Nom: createBienDto.Nom,
          bien_type: createBienDto.bien_type,
          Type: createBienDto.Type,
          prix: createBienDto.prix,
          stock: createBienDto.stock,
          Cree_par: createBienDto.Cree_par,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de créer le bien. Vérifiez les données.',
      );
    }
  }

  findAll(type?: BienType) {
    try {
      if (type) {
        return this.prisma.bien.findMany({
          where: { bien_type: type },
        });
      }
      return this.prisma.bien.findMany();
    } catch (error) {
      throw new BadRequestException('Impossible de retourner les biens.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} bien`;
  }

  async update(id: number, updateBienDto: UpdateBienDto) {
    try {
      const bien = await this.prisma.bien.findUnique({
        where: { id },
      });
      if (!bien) {
        throw new NotFoundException(
          `Le bien avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedBien = await this.prisma.bien.update({
        where: { id },
        data: {
          Nom: updateBienDto.Nom,
          bien_type: updateBienDto.bien_type,
          Type: updateBienDto.Type,
          prix: updateBienDto.prix,
          stock: updateBienDto.stock,
        },
      });
      return updatedBien;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de modifié le bien. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const bien = await this.prisma.bien.findUnique({
        where: { id },
      });
      if (!bien) {
        throw new NotFoundException(
          `Le bien avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.bien.delete({ where: { id: id } });
      return bien;
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimé le bien. Vérifiez les données.',
      );
    }
  }
}
