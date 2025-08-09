import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactureBienService } from './facture-bien.service';
import { CreateFactureBienDto } from './dto/create-facture-bien.dto';
import { UpdateFactureBienDto } from './dto/update-facture-bien.dto';

@Controller('facture-bien')
export class FactureBienController {
  constructor(private readonly factureBienService: FactureBienService) {}

  @Post()
  create(@Body() createFactureBienDto: CreateFactureBienDto) {
    return this.factureBienService.create(createFactureBienDto);
  }

  @Get()
  findAll() {
    return this.factureBienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureBienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureBienDto: UpdateFactureBienDto) {
    return this.factureBienService.update(+id, updateFactureBienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factureBienService.remove(+id);
  }
}
