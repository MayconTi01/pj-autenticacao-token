import { PartialType } from '@nestjs/mapped-types';
import {  dadosDoSeguradoProps } from './create-formulario.dto';

export class UpdateFormularioDto extends PartialType(dadosDoSeguradoProps) {}
