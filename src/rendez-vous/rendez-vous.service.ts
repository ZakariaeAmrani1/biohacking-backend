import { Injectable } from '@nestjs/common';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez-vous.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RendezVousService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRendezVousDto: CreateRendezVousDto) {
    return 'This action adds a new rendezVous';
  }

  findAll() {
    return this.prisma.rendez_vous.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} rendezVous`;
  }

  update(id: number, updateRendezVousDto: UpdateRendezVousDto) {
    return `This action updates a #${id} rendezVous`;
  }

  remove(id: number) {
    return `This action removes a #${id} rendezVous`;
  }
}
