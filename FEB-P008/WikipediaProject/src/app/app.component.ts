import { Component } from '@angular/core';
import { WikipediaApiService } from "../app/wikipedia-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
