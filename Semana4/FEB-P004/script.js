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

    /*
    console.log(d)
    console.log(pai)
    console.log(pai.innerText)
    */
}