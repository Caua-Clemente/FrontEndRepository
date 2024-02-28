import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaApiService {

  apiLink: string = "https://restcountries.com/v3.1/all?fields=name,population";

  async getPaises(): Promise<any> {
    try{
      const url = this.apiLink;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Erro ao buscar países.');
      }

      const paises = await response.json();
      console.log(paises)
//      const paisesFormatados = paises.map(x => x.name.official, x.population)
      return paises;
    } 
    catch (error) {
      throw new Error(`Erro na requisição: ${(error as Error).message}`);
    }
  }


  /*
  https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Brazil&limit=10&namespace=0

  https://en.wikipedia.org/w/api.php?action=query&exintro=&format=json&prop=extracts&titles=Brazil&exsentences=1
  */

  async search(pesquisa: string):Promise<any> {
    try{
      const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${pesquisa}&limit=10&namespace=0`;
      const response = await fetch(url, { mode: 'no-cors' });

      if (!response.ok) {
        throw new Error('Erro throw');
      }

      const resultados = await response.json();
      console.log(resultados)

      return resultados
    }

    catch (error) {
      throw new Error(`Erro na requisição: ${(error as Error).message}`);
    }
  }

  constructor(private http: HttpClient) { }
}
