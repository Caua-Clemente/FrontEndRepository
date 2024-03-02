import { Component } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent{
  
  inscricao:Subscription | undefined;
  valor: any[] = [];

  constructor(private comunicacaoService:ComunicacaoService) { 
    this.inscricao = this.comunicacaoService.classesSubject.subscribe(classes =>{
      this.valor = classes
    })
  }

  enviarClasse(classe: string){
    this.comunicacaoService.selecionarClasse(classe);
  }
}