import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  pessoa = {
    nome: '',
    sobrenome: '',
    idade: null,
    sexo: 'N',
    dataNascimento: ''
  };

  onSave() {
    console.log(this.pessoa);
    this.pessoa = {
      nome: '',
      sobrenome: '',
      idade: null,
      sexo: 'N',
      dataNascimento: ''
    };
  }
}
