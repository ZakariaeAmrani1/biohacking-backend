import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    try {
      return await this.prisma.client.create({
        data: {
          CIN: createClientDto.CIN,
          nom: createClientDto.nom,
          prenom: createClientDto.prenom,
          date_naissance: new Date(createClientDto.date_naissance),
          adresse: createClientDto.adresse,
          numero_telephone: createClientDto.numero_telephone,
          groupe_sanguin: createClientDto.groupe_sanguin,
          email: createClientDto.email,
          allergies: createClientDto.allergies,
          antecedents: createClientDto.antecedents,
          commentaire: createClientDto.commentaire,
          Cree_par: createClientDto.Cree_par,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UnprocessableEntityException(
            `Un client avec ce CIN (${createClientDto.CIN}) existe déjà.`,
          );
        }
      }
      throw new BadRequestException(
        'Impossible de créer le client. Vérifiez les données.',
      );
    }
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try {
      const client = await this.prisma.client.findUnique({ where: { id } });
      if (!client) {
        throw new NotFoundException(
          `Client avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedClient = await this.prisma.client.update({
        where: { id },
        data: {
          CIN: updateClientDto.CIN,
          nom: updateClientDto.nom,
          prenom: updateClientDto.prenom,
          date_naissance: new Date(updateClientDto.date_naissance!),
          adresse: updateClientDto.adresse,
          numero_telephone: updateClientDto.numero_telephone,
          groupe_sanguin: updateClientDto.groupe_sanguin,
          email: updateClientDto.email,
          allergies: updateClientDto.allergies,
          antecedents: updateClientDto.antecedents,
          commentaire: updateClientDto.commentaire,
          Cree_par: updateClientDto.Cree_par,
        },
      });
      return updatedClient;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UnprocessableEntityException(
            `Un client avec ce CIN (${updateClientDto.CIN}) existe déjà.`,
          );
        }
      }
      throw new BadRequestException(
        'Impossible de modifié le client. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const client = await this.prisma.client.findUnique({ where: { id } });
      if (!client) {
        throw new NotFoundException(
          `Client avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.client.delete({ where: { id: id } });
      return client;
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimé le client. Vérifiez les données.',
      );
    }
    return `This action removes a #${id} client`;
  }
}
