

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

