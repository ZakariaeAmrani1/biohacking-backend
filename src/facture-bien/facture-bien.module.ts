import { Module } from '@nestjs/common';
import { FactureBienService } from './facture-bien.service';
import { FactureBienController } from './facture-bien.controller';

@Module({
  controllers: [FactureBienController],
  providers: [FactureBienService],
})
export class FactureBienModule {}
