import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {

  formulario: FormGroup;

  generos: string[] = ["", "Masculino", "Feminino", "Outro"];
  profissoes: string[] = ["", "Cientista", "Garçom", "Policial", "Advogado", "Vendedor", "Autômono", "Outro"];

  constructor() { 
    this.formulario = new FormGroup({
      'nomeUsuario': new FormControl(null,
      [ 
          Validators.required,
          Validators.maxLength(12),
          Validators.pattern(/^\S*$/)
      ]),
      
      'senha': new FormControl(null, 
      [ 
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/.*\d.*/),
          Validators.pattern(/.*[A-Z].*/)
      ]),
      
      'email': new FormControl(null, 
      [
          Validators.required,
          Validators.email
      ]),
      
      'nomeCompleto': new FormControl(null, 
      [
          Validators.required,
          Validators.pattern(/^[^\s]+\s[^\s]+.*$/)
      ]),
      
      'telefone': new FormControl(null, 
      [
          Validators.required,
          Validators.pattern(/^\d{2}-\d{5}-\d{4}$/)
      ]),
          
      'endereco': new FormControl(null, 
      [
          Validators.required,
          Validators.pattern(/^[^\s]+\s[^\s]+.*$/)
      ]),

      'dataNascimento': new FormControl(null, 
      [
          Validators.required,
          Validators.pattern(/^\d{2}-\d{2}-\d{4}$/),
          // Validators.validadorCustomizado
      ]),

      'genero': new FormControl(null, 
      [
          Validators.required
      ]),
      
      'profissao': new FormControl(null, 
      [
          Validators.required
      ]),
    });
  }

  ngOnInit(){

  }

  onSubmit(){
    if (this.formulario.valid) {
      console.log('Formulário válido:', this.formulario.value);
      // Aqui você pode enviar o formulário para o servidor ou fazer outra ação
    } else {
      console.log('Formulário inválido');
    }
  }

}
