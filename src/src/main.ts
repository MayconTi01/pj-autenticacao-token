import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { FormModule } from './app.module';

const csurf = require('csurf');

async function bootstrap() {
  const app = await NestFactory.create(FormModule);
  app.enableCors();
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não definidas no DTO
      forbidNonWhitelisted: true, // Lança erro se houver propriedades não definidas
      transform: true, // Converte payloads para instâncias de classes DTO
    }),
  );

  app.use(
    csurf({
      cookie: {
        httpOnly: true, // o cookie não pode ser acessado pelo JavaScript do navegador
        sameSite: 'strict', // previne envio de cookie em requisições cruzadas
        secure: false, // deixe true se usar HTTPS
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
