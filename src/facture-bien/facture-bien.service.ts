import { Injectable } from '@nestjs/common';
import { CreateFactureBienDto } from './dto/create-facture-bien.dto';
import { UpdateFactureBienDto } from './dto/update-facture-bien.dto';

@Injectable()
export class FactureBienService {
  create(createFactureBienDto: CreateFactureBienDto) {
    return 'This action adds a new factureBien';
  }

  findAll() {
    return `This action returns all factureBien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factureBien`;
  }

  update(id: number, updateFactureBienDto: UpdateFactureBienDto) {
    return `This action updates a #${id} factureBien`;
  }

  remove(id: number) {
    return `This action removes a #${id} factureBien`;
  }
}
