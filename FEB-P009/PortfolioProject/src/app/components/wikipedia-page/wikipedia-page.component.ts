import { Component } from '@angular/core';
import { WikipediaApiService } from "../../shared/wikipedia-api.service";

@Component({
  selector: 'app-wikipedia-page',
  templateUrl: './wikipedia-page.component.html',
  styleUrl: './wikipedia-page.component.css'
})
export class WikipediaPageComponent {
  title = 'WikipediaProject';

  constructor(private wikipediaService: WikipediaApiService) { }

  resultList: any[] = [];
  pesquisa: string = '';

  async search(pesquisa: string): Promise<void> {
    try{
      this.wikipediaService.search(pesquisa)
      .then((resultado) =>{

        this.resultList = resultado;
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    catch{

    }
  }
}
