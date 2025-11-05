import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsEmail, IsOptional, IsString, MinLength, ValidateNested, IsDefined } from 'class-validator';

export class dadosDoSegurado {
  @IsString()
  @MinLength(11)
  cpfCnpj: string;

  @IsOptional()
  @IsDateString()
  dataNascimento?: string;

  @IsString()
  @MinLength(3)
  nome: string;

  @IsString()
  cep: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsEmail()
  email: string;
}

export class dadosDoVeiculo {
  @IsString()
  @MinLength(7)
  placaChassis: string;

  @IsString()
  modelo: string;

  @IsString()
  veiculoUso: string;

  @IsBoolean()
  condutor: boolean;

  @IsBoolean()
  quilometragem: boolean;

  @IsBoolean()
  leilao: boolean;

  @IsBoolean()
  sinistrado: boolean;

  @IsBoolean()
  restricao: boolean;
}

export class dadosDoSeguro {
  @IsString()
  tipoCorbertura: string;
  @IsString()
  invalidez: string;
  @IsString()
  danosMateriais: string;
  @IsString()
  danosCorporais: string;
  @IsString()
  acessorios: string;
  @IsString()
  pequenosReparos: string;
  @IsString()
  carroReserva: string;
  @IsString()
  assistencia24: string;
  @IsString()
  rastreador: string;
  @IsString()
  franquia: string;
}

export class CompleteForm {
  @IsDefined()
  @ValidateNested()
  @Type(() => dadosDoSegurado)
  segurado: dadosDoSegurado;

  @IsDefined()
  @ValidateNested()
  @Type(() => dadosDoVeiculo)
  veiculo: dadosDoVeiculo;

  @IsDefined()
  @ValidateNested()
  @Type(() => dadosDoSeguro)
  seguro: dadosDoSeguro;
}
