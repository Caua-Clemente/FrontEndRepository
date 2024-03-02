import { Component } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {

  inscricao:Subscription | undefined;
  valor: any[] = [];

  constructor(private comunicacaoService:ComunicacaoService) { 
    this.inscricao = this.comunicacaoService.propriedadesSubject.subscribe(propriedades =>{
      this.valor = propriedades
    })
  }

  enviarPropriedade(propriedade: string){
    this.comunicacaoService.selecionarPropriedade(propriedade);
  }
}
