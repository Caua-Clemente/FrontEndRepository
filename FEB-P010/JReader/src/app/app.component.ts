import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';
import { ComunicacaoService } from './services/comunicacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'JReader';

  objetoAtual: string = '';
  inscricao:Subscription | undefined;

  constructor(public http: HttpClient, private comunicacaoService:ComunicacaoService) {
    this.inscricao = this.comunicacaoService.objetoAtualSubject.subscribe(objeto =>{
      this.objetoAtual = objeto
    })
  }

  ngOnInit(): void {
    this.comunicacaoService.initialize()
  }

  comprar() {
    this.comunicacaoService.comprar()
  }
}
