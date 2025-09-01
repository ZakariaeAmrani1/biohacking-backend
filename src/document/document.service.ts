import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async create(createDocumentDto: CreateDocumentDto) {
    try {
      return await this.prisma.document.create({
        data: {
          template_id: createDocumentDto.template_id,
          CIN: createDocumentDto.CIN,
          data_json: createDocumentDto.data_json,
          Cree_par: createDocumentDto.Cree_par,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new UnprocessableEntityException(
          `Une erreur lors de la création du document`,
        );
      }
      throw new BadRequestException(
        'Impossible de créer le document. Vérifiez les données.',
        error,
      );
    }
  }

  findAll() {
    try {
      return this.prisma.document.findMany();
    } catch (error) {
      throw new BadRequestException('Impossible de retourner les documents.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} document`;
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    try {
      const template = await this.prisma.document_templates.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `Le document avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedTemplate = await this.prisma.document.update({
        where: { id },
        data: {
          template_id: updateDocumentDto.template_id,
          CIN: updateDocumentDto.CIN,
          data_json: updateDocumentDto.data_json,
          Cree_par: updateDocumentDto.Cree_par,
        },
      });
      return updatedTemplate;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de modifié le document. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const template = await this.prisma.document.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `Document avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.document.delete({ where: { id: id } });
      return template;
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimé le Document. Vérifiez les données.',
      );
    }
  }
}
