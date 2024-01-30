import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'JReader';

  result: any;
  classes: string[] = [];
  classeAtual: string = '';

  objetos: string[] = [];
  objetoAtual: string = ''
  
  propriedades: string[] = [];
  propriedadeAtual: string = '';

  valorPropriedade: string = '';
  urlToJson = 'assets/veiculos.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
      console.log(this.result);
      this.classes = Object.keys(this.result);
    });
  }

  selecionarClasse(classe: string): void {
    this.objetos = [];
    this.propriedades = [];

    this.classeAtual = classe;
    this.objetoAtual = '';
    this.propriedadeAtual = ''
    this.valorPropriedade = '';

    let listaObjetos: any[] = []
    listaObjetos = this.result[this.classeAtual];

    listaObjetos.forEach(element => {
      this.objetos.push(element.Name)
    });
  }

  selecionarObjeto(objeto: string): void {
    this.propriedades = [];

    this.objetoAtual = objeto;
    this.propriedadeAtual = ''
    this.valorPropriedade = '';

    let listaPropriedades: any[] = []
    const objetos = this.result[this.classeAtual]
    let index = objetos.findIndex((obj: any) => obj.Name === this.objetoAtual)

    listaPropriedades = this.result[this.classeAtual][index];
    this.propriedades = Object.keys(listaPropriedades)
  }

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeAtual = propriedade;
    
    let index = this.result[this.classeAtual].findIndex((obj: any) => obj.Name === this.objetoAtual)
    this.valorPropriedade = this.result[this.classeAtual][index][this.propriedadeAtual]
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
