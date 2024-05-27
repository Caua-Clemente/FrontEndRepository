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
    { id: 0, name: 'Escrivaninha', price: 400, quantity: 0, imageURL: '../assets/images/escrivaninha.jpg', marcado: 0}, 
    { id: 1, name: 'Mouse RGB', price: 200, quantity: 0, imageURL: '../assets/images/mouse_gamer.jpg', marcado: 0}, 
    { id: 2, name: 'Notebook Daten', price: 1800, quantity: 0, imageURL: '../assets/images/notebook_daten.jpg', marcado: 0},
    { id: 3, name: 'Suporte para notebook', price: 80, quantity: 0, imageURL: '../assets/images/suporte_notebook.jpg', marcado: 0},
    { id: 4, name: 'Teclado ABNT2', price: 250, quantity: 0, imageURL: '../assets/images/teclado_abnt2.jpg', marcado: 0} 
  ]);

  subTotal = computed(() => 
    this.listaItens().reduce((acc, item) => acc + (item.price * item.quantity * item.marcado), 0)
  )

  subQuantidade = computed(() => 
    this.listaItens().reduce((acc, item) => acc + (item.quantity * item.marcado), 0)
  )

  objetoSignal = signal({quantidade: this.subQuantidade(), valor: this.subTotal()});

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

  desmarcarTodos() {
    const valorAtual = this.listaItens();
    const valorNovo = valorAtual.map(item => ({ ...item, marcado: 0 }));
    this.listaItens.set(valorNovo);
  }
}
