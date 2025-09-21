import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionsServiceDto } from './create-options-service.dto';

export class UpdateOptionsServiceDto extends PartialType(CreateOptionsServiceDto) {}
