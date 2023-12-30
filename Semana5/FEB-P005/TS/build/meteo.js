"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getWeatherData(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = '2ed53261fd6f0baf3e7286608f62c2df';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
        try {
            const response = yield fetch(apiUrl);
            const data = yield response.json();
            if (response.ok) {
                const weatherInfo = {
                    cidade: data.name,
                    temperatura: data.main.temp,
                    clima: data.weather[0].description,
                    umidade: data.main.humidity,
                };
                return weatherInfo;
            }
            else {
                throw new Error('Não foi possível obter os dados da API OpenWeatherMap');
            }
        }
        catch (error) {
            console.error('Erro ao obter os dados:', error);
            throw new Error('Erro ao obter os dados da API OpenWeatherMap');
        }
    });
}
// Chamada da função
getWeatherData('Itabuna')
    .then((weatherData) => {
    console.log('Informações meteorológicas:', weatherData);
    let servicos = document.getElementById('idServicosUL');
    if (servicos) {
        servicos.innerHTML =
            `
			<li>Temperatura: ${weatherData.temperatura}º</li>
			<li>Clima: ${weatherData.clima}</li>
			<li>Umidade: ${weatherData.umidade}%</li>
			`;
    }
})
    .catch((err) => {
    // Lidar com erros
    console.error(err);
});
