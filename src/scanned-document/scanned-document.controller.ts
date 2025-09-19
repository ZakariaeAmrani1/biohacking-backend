import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  ParseIntPipe,
  Res,
  Patch,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import type { Response } from 'express';
import * as path from 'path';
import { ScannedDocumentService } from './scanned-document.service';
import { CreateScannedDocumentDto } from './dto/create-scanned-document.dto';
import { UpdateScannedDocumentDto } from './dto/update-scanned-document.dto';

@Controller('scanned-document')
export class ScannedDocumentController {
  constructor(
    private readonly scannedDocumentService: ScannedDocumentService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          cb(null, fileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.includes('pdf')) {
          return cb(new Error('Only PDF files are allowed'), false);
        }
        cb(null, true);
      },
    }),
  )
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createScannedDocumentDto: CreateScannedDocumentDto,
  ) {
    return this.scannedDocumentService.create(file, createScannedDocumentDto);
  }

  @Get()
  findAll() {
    return this.scannedDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scannedDocumentService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          cb(null, fileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.includes('pdf')) {
          return cb(new Error('Only PDF files are allowed'), false);
        }
        cb(null, true);
      },
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateScannedDocumentDto: UpdateScannedDocumentDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.scannedDocumentService.update(
      +id,
      updateScannedDocumentDto,
      file,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scannedDocumentService.remove(+id);
  }

  @Get(':id/download')
  async download(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const doc = await this.scannedDocumentService.findOne(id);
    const filePath = path.join(__dirname, '../../uploads', doc.filePath);
    res.download(filePath, doc.filePath);
  }

  @Get(':id/preview')
  async preview(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const doc = await this.scannedDocumentService.findOne(id);
    const filePath = path.join(__dirname, '../../uploads', doc.filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=' + doc.filePath);

    return res.sendFile(filePath);
  }
}
