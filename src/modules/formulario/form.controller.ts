import { Controller, Get, Req, Res, Post, Body  } from '@nestjs/common';
import { FormService } from './form.service';
import type { Request, Response } from 'express';

@Controller('inicio/formulario')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get('/rota')
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

  @Post('formulario2')
  enviarFormulario(@Req() request: Request, @Body() body: any, @Res() response: Response) {
    console.log('✅ Requisição recebida com body:', body);
    return response.json({ message: 'Formulário enviado com sucesso!' });
  } 
}







// @Controller()
 //export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
