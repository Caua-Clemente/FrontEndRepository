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
function getNews2() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apiKey = 'd8787b010d992ca0554a93011a8d537e';
            const q = 'universidade';
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
getNews2()
    .then((news) => {
    console.log(news);
    artigos = news;
})
    .catch((error) => {
    console.error(error);
});
