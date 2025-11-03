import { NestFactory } from '@nestjs/core';
import { FormModule } from './app.module';
import cookieParser from 'cookie-parser'; 

const csurf = require('csurf'); 


async function bootstrap() {
  const app = await NestFactory.create(FormModule);
  app.enableCors();
  app.use(cookieParser());
  

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
