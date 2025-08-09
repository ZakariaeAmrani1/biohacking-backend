import { PartialType } from '@nestjs/mapped-types';
import { CreateFactureBienDto } from './create-facture-bien.dto';

export class UpdateFactureBienDto extends PartialType(CreateFactureBienDto) {}
