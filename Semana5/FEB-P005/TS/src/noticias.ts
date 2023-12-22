let artigos : any;

async function getNews(): Promise<any> {
  try{
    const apiKey : string = 'd8787b010d992ca0554a93011a8d537e';
    const q : string = '(universidade AND tecnologia AND educação) OR (universidade AND tecnologia)';
    const lang : string = 'pt';
    const country : string = 'br';
    const max : string = '10';

    const url = `https://gnews.io/api/v4/search?q=${q}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;
    console.log(url)
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
  getNews()
    .then((news) => {
      console.log(news);
      artigos = news.articles;
      const menuMaxString : number = 40;
      const noticiaMaxString : number = 40;
      const resultadoMaxString : number = 55;
      
      let numArtigo : number = 0;


      //MENUS
      let menus : string[] = ["menu-titulo-1", "menu-titulo-2", "menu-titulo-3"];

      for(let i = 0; i < menus.length; i++){
        let elemento : any = document.getElementById(menus[i])
        let titulo : string = artigos[numArtigo].title;
        
        if(titulo.length > menuMaxString){
          titulo = titulo.substring(0, menuMaxString) + "...";
        }
        elemento.innerHTML = `<a href='${artigos[numArtigo++].url}'>${titulo}</a>`
      };


      //NOTICIAS
      let noticias : string[] = ["noticia-titulo-1", "noticia-titulo-2"];

      for(let i = 0; i < noticias.length; i++){
        let elemento : any = document.getElementById(noticias[i])
        
        let titulo : string = artigos[numArtigo].title;
        if(titulo.length > noticiaMaxString){
          titulo = titulo.substring(0, noticiaMaxString) + "...";
        }

        let subtitulo : string = artigos[numArtigo].description;
        if(subtitulo.length > noticiaMaxString){
          subtitulo = subtitulo.substring(0, noticiaMaxString) + "...";
        }

        elemento.innerHTML =
        `
        ${titulo}
        <ul><li><a href='${artigos[numArtigo++].url}'>${subtitulo}</a></li></ul>
        `
      };

      
      //RESULTADOS
      let resultados : string[] = ["resultados-titulo-1", "resultados-titulo-2"];

      for(let i = 0; i < resultados.length; i++){
        let elemento : any = document.getElementById(resultados[i])
        
        let titulo : string = artigos[numArtigo].title;
        if(titulo.length > resultadoMaxString){
          titulo = titulo.substring(0, resultadoMaxString) + "...";
        }

        let subtitulo : string = artigos[numArtigo].description;
        if(subtitulo.length > resultadoMaxString){
          subtitulo = subtitulo.substring(0, resultadoMaxString) + "...";
        }

        elemento.innerHTML =
        `
        ${titulo}
        <ul><li><a href='${artigos[numArtigo++].url}'>${subtitulo}</a></li></ul>
        `
      };

    })
    .catch((error) => {
      console.error(error);
    });