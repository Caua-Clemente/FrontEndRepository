import { Component } from '@angular/core';
import { ComunicacaoService } from '../services/comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  
  inscricao:Subscription | undefined;
  valor: any[] = [];

  constructor(private comunicacaoService:ComunicacaoService) { 
    this.inscricao = this.comunicacaoService.listaCarrinhoSubject.subscribe(listaCarrinho =>{
      this.valor = listaCarrinho
    })
  }
}
