import { Module } from '@nestjs/common';
import { OptionsServiceService } from './options-service.service';
import { OptionsServiceController } from './options-service.controller';

@Module({
  controllers: [OptionsServiceController],
  providers: [OptionsServiceService],
})
export class OptionsServiceModule {}
