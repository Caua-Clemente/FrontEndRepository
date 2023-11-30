class Computador{

    constructor(ram, rom, modelo, marca){
        this.ram = ram;
        this.rom = rom;
        this.modelo = modelo;
        this.marca = marca;
        return this;
    }

    ligar(){
        alert("Computador está ligado");
    }

    desligar(){
        alert("Desligando computador");
    }

    set_rom(){
    }

    set_ram(){
    }
}

function alteraDOM(map){
    let myUl = document.getElementById("lista");
    let newElement = document.createElement("computador");
    newElement.innerHTML("<li>"+ map +"</li>");
    myUl.appendChild(newElement);
    return myUl;
}

 let com = Map(Object.entries(new Computador(10, 20, "Ryzen 7", "Ryzen")))

 for (let [key, value] of com) {
    document.body.appendChild(alteraDOM(key+":"+value));
}

 document.body.appendChild(alteraDOM(com));
// document.body.getElementById("lista").appendChild(alteraDOM(com));

 alert("aaaaaaaaa");