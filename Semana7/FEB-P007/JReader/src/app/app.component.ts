import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'JReader';

  result: any;
  classes: string[] = [];
  objetos: string[] = [];
  propriedades: string[] = [];
  valorPropriedade: string = '';
  urlToJson = 'assets/veiculos.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
      //console.log(this.result);
      this.classes = Object.keys(this.result);
      console.log(this.classes)
    });
  }

  selecionarClasse(classe: string): void {
    console.log(classe)
    //fazer objetos exibir objetos da classe escolhida
    //deixar propriedades em branco
    //deixar valor propriedade em branco
  }

  selecionarObjeto(objeto: string): void {
    //fazer propriedades exibir propriedades do objeto escolhido
    //deixar valor propriedade em branco
  }

  selecionarPropriedade(propriedade: string): void {
    //fazer valor-propriedade exibir o valor da propriedade escolhida
  }

  comprar(): void{
    //verificar se algum objeto foi selecionado
    //se sim, incluir o objeto na lista do carrinho de compras
    //se não, notificar. talvez mudar a abordagem pra isso seja melhor
  }

  confirmar(): void{
    //talvez seja necessário passar a lista como parâmetro
    //confirma a compra, adiciona ao arquivo json de armazenamento
    // e zera o carrinho
  }
}
