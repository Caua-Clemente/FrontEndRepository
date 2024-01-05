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
let artigos;
function getNews() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apiKey = 'd8787b010d992ca0554a93011a8d537e';
            const q = '(universidade AND tecnologia AND educação) OR (universidade AND tecnologia)';
            const lang = 'pt';
            const country = 'br';
            const max = '10';
            const url = `https://gnews.io/api/v4/search?q=${q}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao buscar notícias.');
            }
            const news = yield response.json();
            return news;
        }
        catch (error) {
            throw new Error(`Erro na requisição: ${error.message}`);
        }
    });
}
// Utilização da função para obter as notícias
getNews()
    .then((news) => {
    console.log(news);
    artigos = news.articles;
    const menuMaxString = 30;
    const noticiaMaxString = 30;
    const resultadoMaxString = 40;
    let numArtigo = 0;
    //MENUS
    let menus = ["menu-titulo-1", "menu-titulo-2", "menu-titulo-3"];
    for (let i = 0; i < menus.length; i++) {
        let elemento = document.getElementById(menus[i]);
        let titulo = artigos[numArtigo].title;
        if (titulo.length > menuMaxString) {
            titulo = titulo.substring(0, menuMaxString) + "...";
        }
        elemento.innerHTML = `<a href='${artigos[numArtigo++].url}'>${titulo}</a>`;
    }
    ;
    //NOTICIAS
    let noticias = ["noticia-titulo-1", "noticia-titulo-2"];
    for (let i = 0; i < noticias.length; i++) {
        let elemento = document.getElementById(noticias[i]);
        let titulo = artigos[numArtigo].title;
        if (titulo.length > noticiaMaxString) {
            titulo = titulo.substring(0, noticiaMaxString) + "...";
        }
        let subtitulo = artigos[numArtigo].description;
        if (subtitulo.length > noticiaMaxString) {
            subtitulo = subtitulo.substring(0, noticiaMaxString) + "...";
        }
        elemento.innerHTML =
            `
        ${titulo}
        <ul><li class="subText"><a href='${artigos[numArtigo++].url}'>${subtitulo}</a></li></ul>
        `;
    }
    ;
    //RESULTADOS
    let resultados = ["resultados-titulo-1", "resultados-titulo-2"];
    for (let i = 0; i < resultados.length; i++) {
        let elemento = document.getElementById(resultados[i]);
        let titulo = artigos[numArtigo].title;
        if (titulo.length > resultadoMaxString) {
            titulo = titulo.substring(0, resultadoMaxString) + "...";
        }
        let subtitulo = artigos[numArtigo].description;
        if (subtitulo.length > resultadoMaxString) {
            subtitulo = subtitulo.substring(0, resultadoMaxString) + "...";
        }
        elemento.innerHTML =
            `
        ${titulo}
        <ul><li class="subText"><a href='${artigos[numArtigo++].url}'>${subtitulo}</a></li></ul>
        `;
    }
    ;
})
    .catch((error) => {
    console.error(error);
});
