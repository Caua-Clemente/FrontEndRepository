import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrl: './valor-propriedade.component.css'
})
export class ValorPropriedadeComponent {
  @Input() valor: string = '';
  @Output() eventoEnviar: EventEmitter<string> = new EventEmitter<string>;
}
