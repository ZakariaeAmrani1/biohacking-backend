import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateScannedDocumentDto } from './dto/create-scanned-document.dto';
import { UpdateScannedDocumentDto } from './dto/update-scanned-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import path from 'path';
import * as fs from 'fs';

@Injectable()
export class ScannedDocumentService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    file: Express.Multer.File,
    createScannedDocumentDto: CreateScannedDocumentDto,
  ) {
    if (!file) throw new BadRequestException('PDF file is required');

    return this.prisma.scannedDocument.create({
      data: {
        title: createScannedDocumentDto.title,
        CIN: createScannedDocumentDto.CIN,
        description: createScannedDocumentDto.description,
        Cree_par: createScannedDocumentDto.Cree_par,
        filePath: file.filename,
      },
    });
  }

  findAll() {
    return this.prisma.scannedDocument.findMany();
  }

  async findOne(id: number) {
    const doc = await this.prisma.scannedDocument.findUnique({ where: { id } });
    if (!doc) throw new NotFoundException(`Document #${id} not found`);
    return doc;
  }

  async update(
    id: number,
    updateScannedDocumentDto: UpdateScannedDocumentDto,
    file?: Express.Multer.File,
  ) {
    const doc = await this.findOne(id);

    let updatedData: any = { ...updateScannedDocumentDto };

    if (file) {
      const oldPath = path.join(__dirname, '../../uploads', doc.filePath);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);

      // save new file path
      updatedData.filePath = file.filename;
    }

    return this.prisma.scannedDocument.update({
      where: { id },
      data: updatedData,
    });
  }

  async remove(id: number) {
    const doc = await this.findOne(id);
    const filePath = path.join(__dirname, '../../uploads', doc.filePath);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return this.prisma.scannedDocument.delete({ where: { id } });
  }
}
