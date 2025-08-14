import {
  BadRequestException,
  Injectable,
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

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
