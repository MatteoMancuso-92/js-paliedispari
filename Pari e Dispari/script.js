let sceltaUtente = prompt("scegli pari o dispari");
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

// Numero random per il computer

function generaNumeroRandom() {
    return Math.floor(Math.random()*5)+1;
}

let numeroComputer=generaNumeroRandom();

// Somma dei due numeri

let somma=numeroUtente+numeroComputer;

// Stabilire se la somma è pari o dispari

function isPari(numero) {
    return numero% 2===0;
}

let sommaPari=isPari(somma);

// Chi ha vinto

if ((sceltaUtente == "pari" && sommaPari) || (sceltaUtente == "dispari" && !sommaPari)) {
    console.log("Hai vinto!");
    } else {
    console.log("Hai perso!");
    }