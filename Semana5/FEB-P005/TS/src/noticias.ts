let artigos : any;

async function getNews1(): Promise<any> {
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
  getNews1()
    .then((news) => {
      console.log(news);
      artigos = news.articles;
      const maxLength : number = 40;

      let menus : string[] = [];
      menus.push("menu-titulo-1");
      menus.push("menu-titulo-2");
      menus.push("menu-titulo-3");

      let numAux : number = 0;
      menus.forEach(menu  => {
        let elemento : any = document.getElementById(menu)

        let titulo : string = artigos[numAux].title;
        if(titulo.length > maxLength){
          titulo = titulo.substring(0, maxLength) + "...";
        }
        elemento.innerHTML = `<a href='${artigos[numAux++].source.url}'>${titulo}</a>`
      });
    })
    .catch((error) => {
      console.error(error);
    });

     /*
      let menuT1 = document.getElementById("menu-titulo-1")
      let menuT2 = document.getElementById("menu-titulo-2")
      let menuT3 = document.getElementById("menu-titulo-3")

      if(menuT1){
        let titulo : string = artigos[0].title;
        if(titulo.length > maxLength){
          titulo = titulo.substring(0, maxLength) + "...";
        }
        menuT1.innerHTML = `<a href='${artigos[0].source.url}'>${titulo}</a>`
      }

      if(menuT2){
        let titulo : string = artigos[1].title;
        if(titulo.length > maxLength){
          titulo = titulo.substring(0, maxLength) + "...";
        }
        menuT2.innerHTML = `<a href='${artigos[1].source.url}'>${titulo}</a>`
      }

      if(menuT3){
        let titulo : string = artigos[2].title;
        if(titulo.length > maxLength){
          titulo = titulo.substring(0, maxLength) + "...";
        }
        menuT3.innerHTML = `<a href='${artigos[2].source.url}'>${titulo}</a>`
      }
    })*/