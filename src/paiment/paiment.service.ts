import { Injectable } from '@nestjs/common';
import { CreatePaimentDto } from './dto/create-paiment.dto';
import { UpdatePaimentDto } from './dto/update-paiment.dto';

@Injectable()
export class PaimentService {
  create(createPaimentDto: CreatePaimentDto) {
    return 'This action adds a new paiment';
  }

  findAll() {
    return `This action returns all paiment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paiment`;
  }

  update(id: number, updatePaimentDto: UpdatePaimentDto) {
    return `This action updates a #${id} paiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} paiment`;
  }
}
