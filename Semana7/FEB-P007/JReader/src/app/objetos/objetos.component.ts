import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input() valor: any[] = [];
  @Output() eventoEnviar: EventEmitter<string> = new EventEmitter<string>;

  enviarObjeto(objeto: string){
    this.eventoEnviar.emit(objeto);
  }
}
