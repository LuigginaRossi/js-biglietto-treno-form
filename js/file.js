

//1)trovo elemento nell'html

const inputFullUserNameEl = document.querySelector( "[name='full-name-user']" );
//valido:
console.log( inputFullUserNameEl )

//2)modifico value:
inputFullUserNameEl.value = "Mario Rossi";
//validazione:
console.log( inputFullUserNameEl.value );

//-------
//1) trovo dato nell'html
const inputKmEl = document.querySelector( "[name='km']" );
//valido:
console.log(inputKmEl)

//2)inserisco value:
inputKmEl.value = "100";

//valido:
console.log( inputKmEl.value );

//---------------

//leggo il select:

//1) nell'html:
const selectAgeEl = document.querySelector( "[name='age']" );
//valido:
console.log( selectAgeEl.value );

//------

//creo add.EventListener:
//1) trovo elemento button:

const generatorBtnEl = document.querySelector( "generator-btn" )

console.log(generatorBtnEl);

//creo evento:

generatorBtnEl.addEventListener( 'click', function(){
    alert( "Hai cliccato il bottone!" );
    
} );


