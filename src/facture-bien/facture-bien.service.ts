import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateFactureBienDto } from './dto/create-facture-bien.dto';
import { UpdateFactureBienDto } from './dto/update-facture-bien.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FactureBienService {
  constructor(private prisma: PrismaService) {}

  async create(createFactureBienDto: CreateFactureBienDto) {
    try {
      return await this.prisma.facture_bien.create({
        data: {
          id_facture: createFactureBienDto.id_facture,
          id_bien: createFactureBienDto.id_bien,
          type_bien: createFactureBienDto.type_bien,
          quantite: createFactureBienDto.quantite,
          Cree_par: createFactureBienDto.Cree_par,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new UnprocessableEntityException(
          `Une erreur lors de la création du bien/facture`,
        );
      }
      throw new BadRequestException(
        'Impossible de créer le bien/facture. Vérifiez les données.',
        error,
      );
    }
  }

  findAll() {
    try {
      return this.prisma.facture_bien.findMany({
        include: {
          bien: {
            select: {
              id: true,
              Nom: true,
              prix: true,
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException(
        'Impossible de retourner les biens/factures.',
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} factureBien`;
  }

  async update(id: number, updateFactureBienDto: UpdateFactureBienDto) {
    try {
      const template = await this.prisma.facture_bien.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `La bien/facture avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedTemplate = await this.prisma.facture_bien.update({
        where: { id },
        data: {
          id_facture: updateFactureBienDto.id_facture,
          id_bien: updateFactureBienDto.id_bien,
          type_bien: updateFactureBienDto.type_bien,
          quantite: updateFactureBienDto.quantite,
          Cree_par: updateFactureBienDto.Cree_par,
        },
      });
      return updatedTemplate;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de modifié la bien/facture. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const existing = await this.prisma.facture_bien.findMany({
        where: { id_facture: id },
      });

      if (existing.length === 0) {
        throw new NotFoundException(
          `Aucun Bien/Facture trouvé avec id_facture ${id}`,
        );
      }

      await this.prisma.facture_bien.deleteMany({
        where: { id_facture: id },
      });

      return {
        message: `Tous les biens/factures avec id_facture ${id} ont été supprimés`,
        count: existing.length,
      };
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimer les Bien/Facture. Vérifiez les données.',
      );
    }
  }
}
