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
    //this.usePaises();
    this.useSearch();
  }

  async usePaises(): Promise<void> {
    this.wikipediaService.getPaises()
    .then((paises) => {
      this.resultList = paises;
      console.log(this.resultList);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  async useSearch(): Promise<void> {
    this.wikipediaService.search("Brasil")
    .then((resultados) =>{

    })
    .catch((error) => {
      console.error(error);
    });
  }
}
