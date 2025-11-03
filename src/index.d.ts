// src/express.d.ts ou src/types/express.d.ts
import { Role } from './auth/enums/role.enum'; // Ajuste o caminho se necessário

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        cpf: string;
        permissao: Role;
        nome: string;
        nome_usuario: string;
        cadastro_id: number | undefined;
        cadastro_data: string;
        iat: number;
        exp: number;
      };
      cookies: { [key: string]: string };
      signedCookies: { [key: string]: string };
      csrfToken(): string;
    }
  }
}

export {};
