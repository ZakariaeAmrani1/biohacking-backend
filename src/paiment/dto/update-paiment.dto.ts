import { PartialType } from '@nestjs/mapped-types';
import { CreatePaimentDto } from './create-paiment.dto';

export class UpdatePaimentDto extends PartialType(CreatePaimentDto) {}
