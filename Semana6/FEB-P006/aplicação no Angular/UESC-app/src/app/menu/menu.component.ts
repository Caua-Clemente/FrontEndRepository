import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuURL1: string = "";
  menuURL2: string = "";
  menuURL3: string = "";
  menuTitulo1: string = "Título 1"
  menuTitulo2: string = "Título 2"
  menuTitulo3: string = "Título 3"

  async getNews(): Promise<any> {
    try{
      const apiKey : string = 'd8787b010d992ca0554a93011a8d537e';
      const q : string = '(universidade AND tecnologia AND educação) OR (universidade AND tecnologia)';
      const lang : string = 'pt';
      const country : string = 'br';
      const max : string = '10';

      const url = `https://gnews.io/api/v4/search?q=${q}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Erro ao buscar notícias.');
      }

      const news = await response.json();
      return news;
    } 
    catch (error) {
      throw new Error(`Erro na requisição: ${(error as Error).message}`);
    }
  }

  async useNews(): Promise<void> {
    this.getNews()
    .then((news) => {
      let artigos = news.articles;
      const menuMaxString : number = 30;

      //MENUS
      this.menuURL1 = artigos[0].url;
      this.menuURL2 = artigos[1].url;
      this.menuURL3 = artigos[2].url;
      this.menuTitulo1 = this.reduceString(artigos[0].title, menuMaxString);
      this.menuTitulo2 = this.reduceString(artigos[1].title, menuMaxString);
      this.menuTitulo3 = this.reduceString(artigos[2].title, menuMaxString);
      
      if(this.menuTitulo1.length > menuMaxString){
        this.menuTitulo1 = this.menuTitulo1.substring(0, menuMaxString) + "...";
      }
      
      if(this.menuTitulo2.length > menuMaxString){
        this.menuTitulo2 = this.menuTitulo2.substring(0, menuMaxString) + "...";
      }
      
      if(this.menuTitulo3.length > menuMaxString){
        this.menuTitulo3 = this.menuTitulo3.substring(0, menuMaxString) + "...";
      }

    })
    .catch((error) => {
      console.error(error);
    });

  }

  reduceString(str: string, maxSize: number): string{
    if(str.length > maxSize){
      str = str.substring(0, maxSize) + "...";
    }

    return str;
  }

  ngOnInit(){
    this.useNews();
  }
}

