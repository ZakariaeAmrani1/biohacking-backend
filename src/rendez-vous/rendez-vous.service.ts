import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez-vous.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RendezVousService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRendezVousDto: CreateRendezVousDto) {
    try {
      return await this.prisma.rendez_vous.create({
        data: {
          CIN: createRendezVousDto.CIN,
          sujet: createRendezVousDto.sujet,
          date_rendez_vous: createRendezVousDto.date_rendez_vous,
          status: createRendezVousDto.status,
          Cree_par: createRendezVousDto.Cree_par,
        },
      });
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException(
        'Impossible de créer le rendez-vous. Vérifiez les données.',
      );
    }
  }

  findAll() {
    try {
      return this.prisma.rendez_vous.findMany({
        include: {
          client: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              CIN: true,
              email: true,
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException('Impossible de retourner les rendez-vous.');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} rendezVous`;
  }

  async update(id: number, updateRendezVousDto: UpdateRendezVousDto) {
    try {
      const appointment = await this.prisma.rendez_vous.findUnique({
        where: { id },
      });
      if (!appointment) {
        throw new NotFoundException(
          `Rendez vous avec l'identifiant ${id} introuvable`,
        );
      }
      const updatedAppointment = await this.prisma.rendez_vous.update({
        where: { id },
        data: {
          CIN: updateRendezVousDto.CIN,
          sujet: updateRendezVousDto.sujet,
          date_rendez_vous: updateRendezVousDto.date_rendez_vous,
          status: updateRendezVousDto.status,
          Cree_par: updateRendezVousDto.Cree_par,
        },
      });
      return updatedAppointment;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Impossible de modifié le rendez-vous. Vérifiez les données.',
        );
      }
      throw new BadRequestException(
        'Impossible de modifié le rendez-vous. Vérifiez les données.',
      );
    }
  }

  async remove(id: number) {
    try {
      const appointment = await this.prisma.rendez_vous.findUnique({
        where: { id },
      });
      if (!appointment) {
        throw new NotFoundException(
          `Rendez vous avec l'identifiant ${id} introuvable`,
        );
      }
      await this.prisma.rendez_vous.delete({ where: { id: id } });
      return appointment;
    } catch (error) {
      throw new BadRequestException(
        'Impossible de supprimé le rendez-vous. Vérifiez les données.',
      );
    }
  }
}
