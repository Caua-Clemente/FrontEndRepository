import { Component } from '@angular/core';
import { WikipediaApiService } from '../wikipedia-api.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css'
})
export class ResultadoPesquisaComponent {

  constructor(private wikipediaService: WikipediaApiService) { }

  resultList: any[] = [];

  ngOnInit(): void{
    this.search();
  }

  async search(): Promise<void> {
    this.wikipediaService.wikiOpenSearch("Brazil")
    .then((resultados) =>{

      this.resultList = [];
      resultados[1].forEach((element: any) => {
        console.log(element)
        this.wikipediaService.wikiQuery(element).then((conteudo) =>{
         const key = Object.keys(conteudo.query.pages)
         //console.log(key[0]); 
         console.log(conteudo.query.pages[key[0]].extract)
         this.resultList.push(conteudo.query.pages[key[0]].extract)
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
