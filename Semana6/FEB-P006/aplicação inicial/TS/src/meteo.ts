async function getWeatherData(city: string): Promise<any> {
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

// Chamada da função
getWeatherData('Itabuna')
    .then((weatherData) => {
        console.log('Informações meteorológicas:', weatherData);
		let servicos = document.getElementById('idServicosUL');
		if(servicos){
			servicos.innerHTML = 
			`
			<li>Temperatura: ${weatherData.temperatura}º</li>
			<li>Clima: ${weatherData.clima}</li>
			<li>Umidade: ${weatherData.umidade}%</li>
			`
		}
		
    })
    .catch((err) => {
        // Lidar com erros
        console.error(err);
    });