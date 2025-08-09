import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaimentService } from './paiment.service';
import { CreatePaimentDto } from './dto/create-paiment.dto';
import { UpdatePaimentDto } from './dto/update-paiment.dto';

@Controller('paiment')
export class PaimentController {
  constructor(private readonly paimentService: PaimentService) {}

  @Post()
  create(@Body() createPaimentDto: CreatePaimentDto) {
    return this.paimentService.create(createPaimentDto);
  }

  @Get()
  findAll() {
    return this.paimentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paimentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaimentDto: UpdatePaimentDto) {
    return this.paimentService.update(+id, updatePaimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paimentService.remove(+id);
  }
}
