import { Component } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  
  inscricao:Subscription | undefined;
  valor: any[] = [];

  constructor(private comunicacaoService:ComunicacaoService) { 
    this.inscricao = this.comunicacaoService.objetosSubject.subscribe(objetos =>{
      this.valor = objetos
    })
  }

  enviarObjeto(objeto: string){
    this.comunicacaoService.selecionarObjeto(objeto);
  }
}
