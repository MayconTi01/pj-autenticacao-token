import { IsString, IsOptional, IsEmail, IsDateString, MinLength, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer'; // 💡 importa o Type
export class dadosDoSegurado { 
  
  @IsString({ message: 'CPF/CNPJ deve ser uma string' })
  @MinLength(11, { message: 'CPF/CNPJ deve ter no mínimo 11 caracteres' })
  cpfCnpj: string;

  @IsString()
  @IsDateString()
  @IsOptional()
    dataNascimento?: string;
  
  @IsString()
  @MinLength(3, { message: 'Nome deve ter no mínimo 03 caracteres' })
  nome: string; 

  @IsString()
  cep: string; 

  @IsString()
  @IsOptional()
  telefone?: string;
  
  @IsEmail()
  @IsString()
  email: string;
} 

export class dadosDoVeiculo{ 

  @IsString()
  @MinLength(7, { message: 'Placa ou Chassi deve ter no mínimo 7 caracteres' })
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
  danosCorporais: string
  @IsString()
  acessorios: string;
  @IsString()
  pequenosReparos: string;
  @IsString()
  carroReserva: string; 
  @IsString()
  assistencia24: string
  @IsString()
  rastreador: string;
  @IsString()
  franquia: string;
}
export class CompleteForm {
  @Type(() => dadosDoSegurado) // 💡 indica ao Nest que é um objeto dessa classe
  Segurado: dadosDoSegurado;

  @Type(() => dadosDoVeiculo) // 💡 idem
  Veiculo: dadosDoVeiculo;

  @Type(() => dadosDoSeguro) // 💡 idem
  Seguro: dadosDoSeguro;
}

  // placaChassi?: string
  // modelo?: string
  // veiculoUso?: string
  // condutor?: boolean
  // quilometragem?: boolean
  // leilao?: boolean
  // sinistrado?: boolean
  // restricao?: boolean





//   @IsString()
//   nome: z.string(),
//   cep: z.string(),
//   telefone: z.string().optional(),
//   email: z.string().optional(),
// } ;
// //   cpfCnpj: z.string(),
//   dataNascimento: z.string().date().optional(),
//   nome: z.string(),
//   cep: z.string(),
//   telefone: z.string().optional(),
//   email: z.string().optional(),
// })

// export const dadosDoVeiculoProps = z.object({
//   placaChassi: z.string().min(1, 'O campo de Placa ou Chassi obrigatório'),
//   modelo: z.string().min(1, 'O campo de modelo é obrigatório.'),
//   veiculoUso: z.string(),
//   condutor: z.boolean().default(false).optional(),
//   quilometragem: z.boolean().default(false).optional(),
//   leilao: z.boolean().default(false).optional(),
//   sinistrado: z.boolean().default(false).optional(),
//   restricao: z.boolean().default(false).optional(),
// })

// export const dadosDoSeguroProps = z.object({
//   tipoCobertura: z.string(),
//   invalidez: z.string(),
//   danosMateriais: z.string(),
//   danosCorporais: z.string(),
//   acessorios: z.string(),
 
//   pequenosReparos: z.string(),
//   carroReserva: z.string(),
//   assistencia24: z.string(),
//   rastreador: z.string(),
 
//   franquia: z.number(),
// });









// export class CreateFormularioDto {
//   @IsString({ message: 'CPF/CNPJ deve ser uma string' })
//   cpfCnpj: string;

//   @IsOptional()
//   @IsDateString()
//   dataNascimento?: string;

//   @IsString()
//   nome: string;

//   @IsString()
//   cep: string;

//   @IsOptional()
//   @IsString()
//   telefone?: string;

//   @IsOptional()
//   @IsEmail()
//   email?: string;
// }
