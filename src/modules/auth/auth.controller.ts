import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('cookies')
  getCookies(@Req() request: Request) {
    console.log(request.cookies); // mostra todos os cookies enviados
    console.log(request.signedCookies); // mostra cookies assinados (se houver)
    
    return {
      message: '🍪 Cookies recebidos com sucesso!',
      cookies: request.cookies,
      signedCookies: request.signedCookies,
    };
  }

  
}
