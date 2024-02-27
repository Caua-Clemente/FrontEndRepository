import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  @Input() valor: any[] = [];
  @Output() eventoEnviar: EventEmitter<string> = new EventEmitter<string>;

  enviarPropriedade(propriedade: string){
    this.eventoEnviar.emit(propriedade);
  }
}
