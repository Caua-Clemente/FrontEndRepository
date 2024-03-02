import { Component } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrl: './valor-propriedade.component.css'
})
export class ValorPropriedadeComponent {
  
  inscricao:Subscription | undefined;
  valor: string = '';

  constructor(private comunicacaoService:ComunicacaoService) { 
    this.inscricao = this.comunicacaoService.valorPropriedadeSubject.subscribe(valorPropriedade =>{
      this.valor = valorPropriedade
    })
  }

  checkValor(){
    if(this.valor == "")
      return false;

    return true;
  }
}
