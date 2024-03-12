/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/


// Creiamo due array di numeri tra 1 e 100 che hanno un numero di elementi 
// diversi scelti dall'utente

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const elUserArray1 = parseInt(prompt('Quanti numeri casuali da 1 a 100 vuoi prendere nel box 1?'));
console.log('numeri di elementi box1: ' + elUserArray1);

let array1 = [];

for(let i = 0; i < elUserArray1; i++){
    let elements = getRndInteger(1, 100);
    array1.push(elements)
};
console.log(array1);

const elUserArray2 = parseInt(prompt('Quanti numeri casuali da 1 a 100 vuoi prendere nel box 2?'));
console.log('numeri di elementi box2: ' + elUserArray2);

let array2 = [];

for(let i = 0; i < elUserArray2; i++){
    let elements = getRndInteger(1, 100);
    array2.push(elements)
};
console.log(array2);


// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
//  troviamo la differemza di numeri di elementi
// usiamo la differenza per creare in ciclo per pareggiare il numero di Elementi 
if(array1.length > array2.length) {
    let differenceArray  = parseInt(array1.length - array2.length);
    console.log('differenza di elementi tra le due box: ' + differenceArray );
    for (let i = 0; i < differenceArray ; i++) {
        let elements = getRndInteger(1, 100);
        array2.push(elements)
    }
    console.log(array2);
    
} else {
    let differenceArray  = parseInt(array2.length - array1.length);
    console.log('differenza di elementi tra le due box: ' + differenceArray );
    for (let i = 0; i < differenceArray ; i++) {
        let elements = getRndInteger(1, 100);
        array1.push(elements);
    }
    console.log(array1);
}




