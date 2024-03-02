import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-jreader-page',
  templateUrl: './jreader-page.component.html',
  styleUrl: './jreader-page.component.css'
})
export class JreaderPageComponent {
  title = 'JReader';

  urlToJson = 'assets/veiculos.json';
  result: any;

  classes: string[] = [];
  classeAtual: string = '';

  objetos: string[] = [];
  objetoAtual: string = ''
  
  propriedades: string[] = [];
  propriedadeAtual: string = '';

  valorPropriedade: string = '';
  
  listaCarrinho: string[] = [];

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
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
    if(this.objetoAtual=="")
      return;

    this.listaCarrinho.push(this.objetoAtual);
  }
}
