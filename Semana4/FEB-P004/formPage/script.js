function enviar(){
    event.preventDefault()

    var destino = document.getElementById("fdestino").value;
    var tipo = document.getElementById("ftipo").value;
    var tempo = document.getElementById("ftempo").value;
    var alimentacao = document.getElementById("falimentacao").value;
    var valor = document.getElementById("fvalor").value;
    var taxa = document.getElementById("ftaxa").value;
    var parcela = document.getElementById("fparcelas").value;
    var imagem = document.getElementById("fimagem").value;

    
    let div = document.getElementById("container-destinos");
    div.innerHTML += 
    `
        <div class="roteiros-viagens">
            <img src="${imagem}" class="postal">
            <div class="roteiro-destino">${destino}</div>
                <ul class="roteiro-incluso">
                    <li>${tipo}</li>
                    <li>${tempo}</li>
                    <li>${alimentacao}</li>
                </ul>
            <div class="roteiro-preco">R$${valor}</div>
            <div class="roteiro-obs">${taxa}</div>
            <div class="roteiro-parcelamento">${parcela}</div>
            <button class="roteiro-comprar" onclick="getRoteiro(this)" >Comprar</button>
        </div>
    `
}

function getRoteiro(d){
    console.clear()
    let pai = d.parentNode;
    let lista = pai.innerText.split("\n")

    let json = {
        "destino": lista[0],
        "detalhe1": lista[1],
        "detalhe2": lista[2],
        "detalhe3": lista[3],
        "preco": lista[4],
        "taxas": lista[5],
        "parcelas": lista[6]
    }

    console.log(json)
}