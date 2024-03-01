import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticiaURL1: string = "";
  noticiaURL2: string = "";
  noticiaTitulo1: string = "Título 1"
  noticiaTitulo2: string = "Título 2"
  noticiaSubTitulo1: string = "Subtítulo 1"
  noticiaSubTitulo2: string = "Subtítulo 2"

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
      const noticiaMaxString : number = 30;

      //NOTICIAS
      this.noticiaURL1 = artigos[3].url;
      this.noticiaURL2 = artigos[4].url;
      this.noticiaTitulo1 = this.reduceString(artigos[3].title, noticiaMaxString);
      this.noticiaTitulo2 = this.reduceString(artigos[4].title, noticiaMaxString);
      this.noticiaSubTitulo1 = this.reduceString(artigos[3].description, noticiaMaxString);
      this.noticiaSubTitulo2 = this.reduceString(artigos[4].description, noticiaMaxString);

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
