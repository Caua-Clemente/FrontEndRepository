import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaApiService {
  
  constructor(private http: HttpClient) { }

  async wikiOpenSearch(pesquisa: string):Promise<any> {
    try{
      const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${pesquisa}&limit=10&namespace=0&origin=*`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Erro throw');
      }

      const resultados = await response.json();
      //console.log(resultados)

      return resultados
    }

    catch (error) {
      throw new Error(`Erro na requisição: ${(error as Error).message}`);
    }
  }


  async wikiQuery(titulo: string):Promise<any> {
      try{
        const url = `https://en.wikipedia.org/w/api.php?action=query&exintro=&format=json&prop=extracts&titles=${titulo}&exsentences=1&origin=*`;
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error('Erro throw');
        }
  
        const conteudo = await response.json();
        //console.log(conteudo)
  
        return conteudo
      }
  
      catch (error) {
        throw new Error(`Erro na requisição: ${(error as Error).message}`);
      }
  }

  async search(pesquisa: string): Promise<any> {
    try {
      const resultados = await this.wikiOpenSearch(pesquisa);
      let response: any[] = [];
      let index: number = 0;
  
      await Promise.all(resultados[1].map(async (element: any) => {
        const conteudo = await this.wikiQuery(element);
        const key = Object.keys(conteudo.query.pages);
        response.push({
          "texto": conteudo.query.pages[key[0]].extract,
          "link": resultados[3][index++]
        });
      }));
  
      //console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
