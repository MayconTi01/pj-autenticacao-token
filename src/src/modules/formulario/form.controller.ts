import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CompleteForm } from './dto/create-formulario.dto';
import { FormService } from './form.service';

@Controller('inicio/formulario')
export class FormController {
  constructor(private readonly formService: FormService) {}
  @Get('/auth')
  getFormulario(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
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
  dadosFormularioSegurado(@Body() formSegurado: CompleteForm) {
    //console.log('ERSDJASKDSAD');
    {
      return {
        message: 'Formulário recebido com sucesso!',
        dados: formSegurado,
      };
      //return console.log(fromSegurado);
    }
  }
}
