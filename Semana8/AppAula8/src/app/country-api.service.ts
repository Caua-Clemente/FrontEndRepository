import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  apiLink: string = "https://restcountries.com/v3.1/all?fields=name,population";

  async getPaises(): Promise<any> {
    try{
      const url = this.apiLink;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Erro ao buscar países.');
      }

      const paises = await response.json();
//      const paisesFormatados = paises.map(x => x.name.official, x.population)
      return paises;
    } 
    catch (error) {
      throw new Error(`Erro na requisição: ${(error as Error).message}`);
    }
  }
  
  constructor() { }
}
