import { Component, computed, signal } from '@angular/core';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEBP010';

  listaItens = signal<Item[]>([
    { id: 0, name: 'carro', price: 1, quantity: 1, imageURL: '../../../assets/images/car_image.jiff', marcado: 0}, 
    { id: 1, name: 'CARRETAAAAAA', price: 100000, quantity: 1, imageURL: '../../../assets/images/car_image.jiff', marcado: 0}, 
    { id: 2, name: 'moriusro', price: 1000, quantity: 2, imageURL: '../../../assets/images/car_image.jiff', marcado: 1},
    { id: 3, name: 'moriusro', price: 1000, quantity: 2, imageURL: 'ads', marcado: 1} 
  ]);

  subTotal = computed(() => 
    this.listaItens().reduce((acc, item) => acc + (item.price * item.quantity * item.marcado), 0)
  )

  recebendoQuantidade(event: {id: number, quantidade: number}){
    const valorAtual = this.listaItens(); 
    const valorNovo = [...valorAtual]; 
    
    valorNovo[event.id] = { ...valorNovo[event.id], quantity: event.quantidade };
    
    this.listaItens.set(valorNovo);
  }

  recebendoMarcacao(event: {id: number, marcado: number}){
    const valorAtual = this.listaItens(); 
    const valorNovo = [...valorAtual]; 
    
    valorNovo[event.id] = { ...valorNovo[event.id], marcado: event.marcado };
    
    this.listaItens.set(valorNovo);
  }
}
