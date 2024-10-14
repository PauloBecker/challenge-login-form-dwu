import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormularioModule
  ]

})
export class FormularioModule { }
