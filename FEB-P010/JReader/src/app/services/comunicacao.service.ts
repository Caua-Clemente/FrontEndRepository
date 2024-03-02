import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  constructor(public http: HttpClient) {
    
  }

  private urlToJson = 'assets/veiculos.json';
  result: any;

  classes: string[] = [];
  classesSubject = new Subject<string[]>();
  classeAtual: string = '';

  objetos: string[] = [];
  objetosSubject = new Subject<string[]>();
  objetoAtual: string = ''
  objetoAtualSubject = new Subject<string>();
  
  propriedades: string[] = [];
  propriedadesSubject = new Subject<string[]>();
  propriedadeAtual: string = '';

  valorPropriedade: string = '';
  valorPropriedadeSubject = new Subject<string>();
  
  listaCarrinho: string[] = [];
  listaCarrinhoSubject = new Subject<string[]>();

  initialize(){
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
      this.classes = Object.keys(this.result);
    });

    console.log("socorro")
  }

  selecionarClasse(classe: string): void {
    this.objetos = [];
    this.objetosSubject.next(this.objetos)
    this.propriedades = [];
    this.propriedadesSubject.next(this.propriedades)
    
    this.classeAtual = classe;
    this.objetoAtual = '';
    this.objetoAtualSubject.next(this.objetoAtual);
    this.propriedadeAtual = ''
    this.valorPropriedade = '';
    this.valorPropriedadeSubject.next(this.valorPropriedade)
    

    let listaObjetos: any[] = []
    listaObjetos = this.result[this.classeAtual];

    listaObjetos.forEach(element => {
      this.objetos.push(element.Name)
    });

    this.objetosSubject.next(this.objetos)
  }

  selecionarObjeto(objeto: string): void {
    this.propriedades = [];
    this.propriedadesSubject.next(this.propriedades)

    this.objetoAtual = objeto;
    this.objetoAtualSubject.next(this.objetoAtual);
    this.propriedadeAtual = ''
    this.valorPropriedade = '';
    this.valorPropriedadeSubject.next(this.valorPropriedade)

    let listaPropriedades: any[] = []
    const objetos = this.result[this.classeAtual]
    let index = objetos.findIndex((obj: any) => obj.Name === this.objetoAtual)

    listaPropriedades = this.result[this.classeAtual][index];
    this.propriedades = Object.keys(listaPropriedades)
    
    this.valorPropriedadeSubject.next(this.valorPropriedade)
  }

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeAtual = propriedade;
    
    let index = this.result[this.classeAtual].findIndex((obj: any) => obj.Name === this.objetoAtual)
    this.valorPropriedade = this.result[this.classeAtual][index][this.propriedadeAtual]

    this.valorPropriedadeSubject.next(this.valorPropriedade)
  }

  comprar(): void{
    if(this.objetoAtual=="")
      return;

    this.listaCarrinho.push(this.objetoAtual);

    this.listaCarrinhoSubject.next(this.listaCarrinho);
  }

  help(){
    console.log("help")
  }
}
