import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateDocumentTemplateDto } from './dto/create-document-template.dto';
import { UpdateDocumentTemplateDto } from './dto/update-document-template.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DocumentTemplatesService {
  constructor(private prisma: PrismaService) {}

  async create(createDocumentTemplateDto: CreateDocumentTemplateDto) {
    try {
      return await this.prisma.document_templates.create({
        data: {
          name: createDocumentTemplateDto.name,
          sections_json: createDocumentTemplateDto.sections_json,
          Cree_par: createDocumentTemplateDto.Cree_par,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
    }
    throw new BadRequestException(
      'Impossible de créer le client. Vérifiez les données.',
    );
  }

  findAll() {
    try {
      return this.prisma.document_templates.findMany();
    } catch (error) {
      throw new BadRequestException('Impossible de retourner les clients.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} documentTemplate`;
  }

  async update(
    id: number,
    updateDocumentTemplateDto: UpdateDocumentTemplateDto,
  ) {
    try {
      const template = await this.prisma.document_templates.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `Modèle de document avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedTemplate = await this.prisma.document_templates.update({
        where: { id },
        data: {
          name: updateDocumentTemplateDto.name,
          sections_json: updateDocumentTemplateDto.sections_json,
          Cree_par: updateDocumentTemplateDto.Cree_par,
        },
      });
      return updatedTemplate;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de modifié le modèle. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const template = await this.prisma.document_templates.findUnique({
        where: { id },
      });
      if (!template) {
        throw new NotFoundException(
          `Modèle avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.document_templates.delete({ where: { id: id } });
      return template;
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimé le modèle. Vérifiez les données.',
      );
    }
  }
}
