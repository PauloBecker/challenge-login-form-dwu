import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  formCadastro = this.fb.group({
    nome: ["", [
      Validators.minLength(3),
      Validators.required
    ]],
    sobrenome: ["", [
      Validators.minLength(3),
      Validators.required
    ]],
    idade:["", [
      Validators.required
    ]],
    dataNascimento:["", [
      Validators.required
    ]]
  })
   
  pessoa = {
    nome: '',
    sobrenome: '',
    idade: null,
    sexo: 'N',
    dataNascimento: ''
  };

  onSave(){
    if (this.isValid()) {
      console.log(this.pessoa);
      this.salvarDados();
    }
  }

  isValid(){
    return this.pessoa.nome && this.pessoa.sobrenome && this.pessoa.idade && this.pessoa.dataNascimento
  }

  constructor(
    private fb: FormBuilder
    
  ){}

  ngOnInit(): void {
    this.formCadastro.dirty;
  }

  /*salvarDados(){
    alert("A mensagem foi enviada!");
    this.formCadastro.reset();
  }*/

    errorMessage(){
      console.log('Campo vazio ou faltando informação.');
      alert(
        " Campo vazio ou faltando informação\n" +
        " Campo nome e sobrenome deve ser texto\n" +
        " Campo númerico só aceita números"
      );
      
    }

  salvarDados() {
    if (this.pessoa.nome && this.pessoa.sobrenome && this.pessoa.idade && this.pessoa.dataNascimento) {
      this.formCadastro.dirty;
      console.log(this.pessoa);
      this.pessoa = {
        nome: '',
        sobrenome: '',
        idade: null,
        sexo: 'N',
        dataNascimento: ''
      };
    }else{
      //this.pessoa.loginError = true;
      this.errorMessage();
    }
  }
}
