import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { FormMudule } from './modules/formulario/form.module';

@Module({
  imports: [AuthModule, FormMudule],
  controllers: [],
  providers: [],
})
export class FormModule {}
