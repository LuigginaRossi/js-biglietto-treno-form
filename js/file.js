//creo add.EventListener:
//1) trovo elemento button:

const generatorBtnEl = document.getElementById( "generator-btn" )

console.log(generatorBtnEl);

generatorBtnEl.addEventListener( "click", function () {

    //QUI LE COSTANTI DI NOME UTENTE, KM E PREZZO:

    //INPUT NAME 
    const inputFullUserNameEl = document.querySelector( "[name='full-name-user']" );
    console.log( inputFullUserNameEl );

    // INPUT KM 
    const inputKmEl = document.querySelector( "[name='km']" );
    console.log(inputKmEl);
    
    //SELECT age range
    const selectAgeEl = document.querySelector( "[name='age']" );

    console.log( selectAgeEl.value );

    //creo costante prezzo biglietto intero:
    const divPriceTicket = document.getElementById("ticket-price");

    console.log(divPriceTicket);

    //calcolo prezzo biglietto:

    const priceTicket = inputKmEl.value  * .21;

    console.log(priceTicket);

    //prendo elemento passanger-info da html:
    const divPassangerInfo = document.getElementById("passenger-info");
    console.log(divPassangerInfo);


    //inserisco valori input nell'elemento-html:
    divPassangerInfo.innerHTML = `Passeggero: ${inputFullUserNameEl.value}.  Il tuo sconto è del ${selectAgeEl.value} %. Percorrenza: ${inputKmEl.value}Km.`

    console.log(divPassangerInfo);
    


    if ( selectAgeEl.value  === 20 ){

        //QUI LA COSTANTE CON IL PREZZO SCONTATO
        
        //sconto 20% per minorenni

        const discount20 = priceTicket * .8;

        console.log(discount20)

        alert( "In quanto minorenne verrà applicato uno sconto del 20%" );

        divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${discount20}`;

        console.log(divPriceTicket);

    } else if (  selectAgeEl.value  === 40) {

        //sconto 40% over 65
        const discount40 = priceTicket * .6;

        console.log(discount40);

        alert(" In quanto over65 verrà applicato uno sconto del 40%!" );

        divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${discount40}`;
        
        console.log(divPriceTicket);

    } else{
        console.log( "paga prezzo pieno!" );

        divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${priceTicket}`;

        console.log(divPriceTicket);
    }

} );


