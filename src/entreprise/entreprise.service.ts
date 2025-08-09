import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntrepriseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEntrepriseDto: CreateEntrepriseDto) {
    try {
      const entreprise = await this.prisma.entreprise.create({
        data: {
          ICE: createEntrepriseDto.ICE,
          CNSS: createEntrepriseDto.CNSS,
          RC: createEntrepriseDto.RC,
          IF: createEntrepriseDto.IF,
          RIB: createEntrepriseDto.RIB,
          patente: createEntrepriseDto.patente,
          adresse: createEntrepriseDto.adresse,
        },
      });
      return entreprise;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'Erreur lors de la création de l’entreprise.',
      );
    }
  }

  async findAll() {
    return this.prisma.entreprise.findFirst();
  }

  findOne(id: number) {
    return `This action returns a #${id} entreprise`;
  }

  async update(id: number, updateEntrepriseDto: UpdateEntrepriseDto) {
    const entreprise = await this.prisma.entreprise.findUnique({
      where: { id },
    });
    if (!entreprise) {
      throw new NotFoundException(
        `Entreprise avec l'identifiant ${id} introuvable`,
      );
    }

    const updatedEntreprise = await this.prisma.entreprise.update({
      where: { id },
      data: updateEntrepriseDto,
    });

    return updatedEntreprise;
  }

  async remove(id: number) {
    const entreprise = await this.prisma.entreprise.findUnique({
      where: { id },
    });
    if (entreprise) {
      await this.prisma.entreprise.delete({ where: { id } });
      return entreprise;
    }
    throw new NotFoundException();
  }
}
