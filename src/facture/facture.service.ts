import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FactureService {
  constructor(private prisma: PrismaService) {}

  async create(createFactureDto: CreateFactureDto) {
    try {
      return await this.prisma.facture.create({
        data: {
          CIN: createFactureDto.CIN,
          date: new Date(createFactureDto.date),
          prix_total: createFactureDto.prix_total,
          statut: createFactureDto.statut,
          notes: createFactureDto.notes,
          Cree_par: createFactureDto.Cree_par,
        },
      });
    } catch (error: any) {
      console.log(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new UnprocessableEntityException(
          `Une erreur lors de la création du facture`,
        );
      }
      throw new BadRequestException(
        'Impossible de créer le facture. Vérifiez les données.',
      );
    }
  }

  findAll() {
    try {
      return this.prisma.facture.findMany();
    } catch (error) {
      throw new BadRequestException('Impossible de retourner les factures.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} facture`;
  }

  async update(id: number, updateFactureDto: UpdateFactureDto) {
    try {
      const template = await this.prisma.facture.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `La facture avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedTemplate = await this.prisma.facture.update({
        where: { id },
        data: {
          CIN: updateFactureDto.CIN ?? undefined,
          date: updateFactureDto.date
            ? new Date(updateFactureDto.date)
            : undefined,
          prix_total: updateFactureDto.prix_total ?? undefined,
          statut: updateFactureDto.statut ?? undefined,
          notes: updateFactureDto.notes ?? undefined,
          Cree_par: updateFactureDto.Cree_par ?? undefined,
        },
      });
      return updatedTemplate;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de modifié la facture. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const template = await this.prisma.facture.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `Facture avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.facture.delete({ where: { id } });
      return template;
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimé la Facture. Vérifiez les données.',
      );
    }
  }
}
