import { PartialType } from '@nestjs/mapped-types';
import { CreateScannedDocumentDto } from './create-scanned-document.dto';

export class UpdateScannedDocumentDto extends PartialType(
  CreateScannedDocumentDto,
) {}
