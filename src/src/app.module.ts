import { Module } from '@nestjs/common';
import { FormController } from './modules/formulario/form.controller';
import { FormService } from './modules/formulario/form.service';

@Module({
  imports: [],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
