import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LogServiceService } from '../../services/log-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {

  formulario: FormGroup;

  generos: string[] = ["", "Masculino", "Feminino", "Outro"];
  profissoes: string[] = ["", "Cientista", "Garçom", "Policial", "Advogado", "Vendedor", "Autômono", "Outro"];
  logAlteracoes: string[] = [];

  constructor(public http: HttpClient, private logServiceService:LogServiceService) {
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
          Validators.required
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
    this.inscricaoAddFormLog();
    this.inscricaoStatusChanges();
  }

  onSubmit(){
    if (this.formulario.valid) {
      console.log('Formulário válido:', this.formulario.value);
      this.logServiceService.showLog(this.logAlteracoes)
      this.logAlteracoes = [];
    } else {
      console.log('Formulário inválido');
    }
  }

  inscricaoAddFormLog(){

    this.formulario.get('nomeUsuario')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Nome de usuário: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('senha')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Senha: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })
    
    this.formulario.get('email')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Email: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('nomeCompleto')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Nome Completo: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('telefone')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Telefone: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('endereco')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Endereço: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('dataNascimento')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Data Nascimento: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('genero')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Gênero: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

    this.formulario.get('profissao')?.valueChanges.subscribe(valor => 
      {
        let formLog:string = ("Profissão: " + valor)
        this.logAlteracoes.push(formLog);
        // console.log(this.logAlteracoes);
      })

  }

  inscricaoStatusChanges(){

    this.formulario.get('nomeUsuario')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Nome de Usuário: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      }
    );

    this.formulario.get('senha')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Senha: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      }
    );

    this.formulario.get('email')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Email: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });

    this.formulario.get('nomeCompleto')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Nome Completo: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });

    this.formulario.get('telefone')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Telefone: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });

    this.formulario.get('endereco')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Endereço: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });

    this.formulario.get('dataNascimento')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Data de Nascimento: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });

    this.formulario.get('genero')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Gênero: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });

    this.formulario.get('profissao')?.statusChanges.subscribe(
      status => {
        let formLog:string = ('Profissão: ' + status);
        // console.log(formLog);        
        this.logAlteracoes.push(formLog);
      });
    
  }
}
