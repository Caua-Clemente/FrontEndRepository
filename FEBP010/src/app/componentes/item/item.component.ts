import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() itemRecebido!: Item;
  @Output() eventoQuantidade = new EventEmitter<{ id: number, quantidade: number }>();
  @Output() eventoMarcado = new EventEmitter<{ id: number, marcado: number }>();

  atualizarQuantidade(valor: number){
    this.itemRecebido.quantity += valor;
    if(this.itemRecebido.quantity < 0)
      this.itemRecebido.quantity = 0
    else
      this.eventoQuantidade.emit({id: this.itemRecebido.id, quantidade: this.itemRecebido.quantity});
  }

  atualizarMarcacao(){
    if(this.itemRecebido.marcado == 0)
      this.itemRecebido.marcado = 1
    else
    this.itemRecebido.marcado = 0;

    this.eventoMarcado.emit({id: this.itemRecebido.id, marcado: this.itemRecebido.marcado});
  }
}
