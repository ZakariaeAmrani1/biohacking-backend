import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DocumentTemplatesService } from './document-templates.service';
import { CreateDocumentTemplateDto } from './dto/create-document-template.dto';
import { UpdateDocumentTemplateDto } from './dto/update-document-template.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('document-templates')
export class DocumentTemplatesController {
  constructor(
    private readonly documentTemplatesService: DocumentTemplatesService,
  ) {}

  @Post()
  create(@Body() createDocumentTemplateDto: CreateDocumentTemplateDto) {
    return this.documentTemplatesService.create(createDocumentTemplateDto);
  }

  @Get()
  findAll() {
    return this.documentTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentTemplateDto: UpdateDocumentTemplateDto,
  ) {
    return this.documentTemplatesService.update(+id, updateDocumentTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentTemplatesService.remove(+id);
  }
}
