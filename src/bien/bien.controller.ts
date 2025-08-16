import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { BienService } from './bien.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BienType } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('bien')
export class BienController {
  constructor(private readonly bienService: BienService) {}

  @Post()
  create(@Body() createBienDto: CreateBienDto) {
    return this.bienService.create(createBienDto);
  }

  @Get()
  findAll(@Query('type') type?: BienType) {
    return this.bienService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBienDto: UpdateBienDto) {
    return this.bienService.update(+id, updateBienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bienService.remove(+id);
  }
}
