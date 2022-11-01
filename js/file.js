//1)INPUT NAME elemento nell'html:

const inputFullUserNameEl = document.querySelector( "[name='full-name-user']" );

console.log( inputFullUserNameEl )

//2)atribuisco value:
inputFullUserNameEl.value = "Jon Snow";

console.log( inputFullUserNameEl.value );

//-----
//1) INPUT KM dato nell'html
const inputKmEl = document.querySelector( "[name='km']" );
//valido:
console.log(inputKmEl)

//2)inserisco value:
inputKmEl.value = 100;

console.log( inputKmEl.value );

//----
//leggo il select:

//1) nell'html:
const selectAgeEl = document.querySelector( "[name='age']" );

console.log( selectAgeEl.value );

//------
//creo costante dati passeggero js:
const divPassangerInfo = document.getElementById("passenger-info");

console.log(divPassangerInfo);

//---
//creo costante prezzo biglietto intero:
const divPriceTicket = document.getElementById("ticket-price");

console.log(divPriceTicket);

//calcolo prezzo biglietto:

const priceTicket = inputKmEl.value  * .21;

console.log(priceTicket);

//sconto 20% per minorenni

const discount20 = priceTicket * .8;

console.log(discount20)

//sconto 40% over 65
const discount40 = priceTicket * .6;

console.log(discount40)

//inserisco valori nell'html

divPassangerInfo.innerHTML = `Passeggero: ${inputFullUserNameEl.value}.  Fascia di età: ${selectAgeEl.value}. Percorrenza: ${inputKmEl.value}Km.`

console.log(divPassangerInfo);

//-----
//creo add.EventListener:
//1) trovo elemento button:

const generatorBtnEl = document.getElementById( "generator-btn" )

console.log(generatorBtnEl);
//=>

selectAgeEl.addEventListener("click", function () {
    if ( console.log( selectAgeEl.value ) == 20){

        alert( "In quanto minorenne verrà applicato uno sconto del 20%" );

        divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${ discount20 }`;

        console.log(divPriceTicket);

    } else if ( console.log( selectAgeEl.value ) == 40) {

        alert(" In quanto over65 verrà applicato uno sconto del 40%!" );

        divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${discount40}`;
        
        console.log(divPriceTicket);

    } else{
        console.log( "paga prezzo pieno!" );

        divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${priceTicket}`;

        console.log(divPriceTicket);
    }
});




generatorBtnEl.addEventListener( "click", function () {
    alert( "Hai cliccato il bottone!" );

    
} );


