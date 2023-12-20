let artigos : any;

async function getNews2(): Promise<any> {
  try{
    const apiKey : string = 'd8787b010d992ca0554a93011a8d537e';
    const q : string = 'universidade';
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
  
  // Utilização da função para obter as notícias
  getNews2()
    .then((news) => {
      console.log(news);
      artigos = news;
    })
    .catch((error) => {
      console.error(error);
    });