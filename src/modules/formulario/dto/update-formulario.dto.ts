import { PartialType } from '@nestjs/mapped-types';
import { CompleteForm } from './create-formulario.dto';

export class UpdateFormularioDto extends PartialType(CompleteForm) {}
