import { Module } from '@nestjs/common';
import { ScannedDocumentService } from './scanned-document.service';
import { ScannedDocumentController } from './scanned-document.controller';

@Module({
  controllers: [ScannedDocumentController],
  providers: [ScannedDocumentService],
})
export class ScannedDocumentModule {}
