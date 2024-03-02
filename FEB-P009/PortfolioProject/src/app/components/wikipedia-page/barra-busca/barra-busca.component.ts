import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})
export class BarraBuscaComponent {
  @Output() eventoEnviar: EventEmitter<string> = new EventEmitter<string>;
  textoPesquisa : string = '';

  enviarTextoPesquisa(){
    this.eventoEnviar.emit(this.textoPesquisa);
  }
}
