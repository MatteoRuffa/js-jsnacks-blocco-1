/*
Cartella: array_tail
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri 
casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande 
del numero di elementi totali dell'array
*/


// Chiediamo all'utente quanti elementi vuole nell'array
const numElements = parseInt(prompt('quanti elementi vuoi creare?'));
console.log(numElements);

// Creiamo un array vuoto
const boxElements = [];

// Generiamo numeri casuali e li inseriamo nell'array
for (let i = 0; i < numElements; i++) {
    let elements = getRndInteger(1, 100);
    console.log(elements);
    boxElements.push(elements);
}
console.log(boxElements);

// Stampiamo gli ultimi 5 elementi dell'array
/*  
    let ultimi5Elementi = boxElements.slice(-5);
    console.log("Gli ultimi 5 elementi dell'array sono:" + ultimi5Elementi)
*/

//NOTE: non ho avuto bisogno con .slice() di dover definire che il num elementi sia > di 5!! (chiedere profs)

// Chiediamo all'utente quanti elementi dell'array dovremo stampare
const numElementsStampa = parseInt(prompt('quanti elementi vuoi stampare in console?'));
/*
Probabilmente conviene controllare che il numero di elementi della coda non sia 
più grande del numero di elementi totali dell'array 
*/

if (numElementsStampa > numElements) {
    console.log('ERRORE!!stai provando a selezionare più elementi di quelli che hai!');
} else {
    let ultimi5Elementi = boxElements.slice(-numElementsStampa);
    console.log("Gli ultimi 5 elementi dell'array sono:" + ultimi5Elementi);
}
