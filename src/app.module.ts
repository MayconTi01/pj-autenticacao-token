import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { FormularioModule } from './modules/formulario/formulario.module';
import { FormMudule } from './modules/formulario/form.module';

@Module({
  imports: [AuthModule, FormularioModule, FormMudule],
  controllers: [],
  providers: [],
})
export class FormModule {}
