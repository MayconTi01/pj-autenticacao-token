import { Controller, Get, Req, Res, Post, Body  } from '@nestjs/common';
import { FormService } from './form.service';
import type { Request, Response } from 'express';
import { CompleteForm } from './dto/create-formulario.dto';

@Controller('inicio/formulario')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get('/auth')
  getFormulario(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    // Mostra cookies no terminal
    console.log(req.cookies);
    console.log(req.signedCookies);

    // Gera token CSRF (csurf adiciona esse método)
    const token = req.csrfToken();

    // Retorna resposta
    return {
      message: '🍪 Cookies recebidos com sucesso!',
      csrfToken: token,
      cookies: req.cookies,
      signedCookies: req.signedCookies,
    };
  }   


  
//  1️⃣	Definir o propósito: "Receber dados do formulario de segurado”
  @Post('/enviar') //2️⃣	Escolher o endpoint	
  //3️⃣	Definir os dados de entrada	nome, email, mensagem
  dadosFormularioSegurado(@Body() formSegurado: CompleteForm) { {
    return { 
      message: 'Formulário recebido com sucesso!',
      dados:  formSegurado
  };
    //return console.log(fromSegurado);     
  }; 
  } 
}

// 
// 4️⃣	Criar a lógica	validar, salvar, verificar token
// 5️⃣	Enviar resposta	sucesso ou erro
// 6️⃣	Testar	via Insomnia

  //enviarFormulario(
    //@Req() request: Request, @Body() body: any, @Res() response: Response
  //) {

    // Criar objetos do formulario com os dados recedidos 

    //console.log('✅ Requisição recebida com body:', body);
    //return response.json({ message: 'Formulário enviado com sucesso!' });
  //} 








// @Controller()
 //export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
//
