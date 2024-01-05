import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  servicoTemperatura: string = ""
  servicoClima: string = ""
  servicoUmidade: string = ""

  async getWeatherData(city: string): Promise<any> {
    const apiKey = '2ed53261fd6f0baf3e7286608f62c2df';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = {
                cidade: data.name,
                temperatura: data.main.temp,
                clima: data.weather[0].description,
                umidade: data.main.humidity,
            };

            return weatherInfo;
        } else {
            throw new Error('Não foi possível obter os dados da API OpenWeatherMap');
        }
    } catch (error) {
        console.error('Erro ao obter os dados:', error);
        throw new Error('Erro ao obter os dados da API OpenWeatherMap');
    }
  }

  async useWeatherData(){
    this.getWeatherData('Itabuna')
    .then((weatherData) => {

      this.servicoTemperatura = weatherData.temperatura;
      this.servicoClima = weatherData.clima;
      this.servicoUmidade = weatherData.umidade;  
    })
    .catch((err) => {
        // Lidar com erros
        console.error(err);
    });
  }

  ngOnInit(){
    this.useWeatherData();
  }

}
