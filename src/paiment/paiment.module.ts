import { Module } from '@nestjs/common';
import { PaimentService } from './paiment.service';
import { PaimentController } from './paiment.controller';

@Module({
  controllers: [PaimentController],
  providers: [PaimentService],
})
export class PaimentModule {}
