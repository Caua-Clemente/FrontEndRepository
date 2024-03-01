import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {
  resultadoURL1: string = "";
  resultadoURL2: string = "";
  resultadoTitulo1: string = "Título 1"
  resultadoTitulo2: string = "Título 2"
  resultadoSubTitulo1: string = "Subtítulo 1"
  resultadoSubTitulo2: string = "Subtítulo 2"

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
      const resultadoMaxString : number = 40;

      //RESULTADOS
      this.resultadoURL1 = artigos[5].url;
      this.resultadoURL2 = artigos[6].url;
      this.resultadoTitulo1 = this.reduceString(artigos[5].title, resultadoMaxString);
      this.resultadoTitulo2 = this.reduceString(artigos[6].title, resultadoMaxString);
      this.resultadoSubTitulo1 = this.reduceString(artigos[5].description, resultadoMaxString);
      this.resultadoSubTitulo2 = this.reduceString(artigos[6].description, resultadoMaxString);

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
