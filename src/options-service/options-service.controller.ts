import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import * as optionsServiceService_1 from './options-service.service';
import { CreateOptionsServiceDto } from './dto/create-options-service.dto';
import { UpdateOptionsServiceDto } from './dto/update-options-service.dto';

@Controller('options')
export class OptionsServiceController {
  constructor(
    private readonly optionsServiceService: optionsServiceService_1.OptionsServiceService,
  ) {}

  @Get()
  findAll(): optionsServiceService_1.OptionLists {
    return this.optionsServiceService.findAll();
  }

  @Put()
  update(
    @Body() partial: Partial<optionsServiceService_1.OptionLists>,
  ): optionsServiceService_1.OptionLists {
    return this.optionsServiceService.update(partial);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //  @Body() partial: UpdateOptionsDto): OptionLists {
  //   return this.optionsServiceService.update(+id, partial);
  // }
}
