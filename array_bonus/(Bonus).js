/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/


// Creiamo due array di numeri tra 1 e 100 che hanno un numero di elementi 
// diversi scelti dall'utente
let elements = getRndInteger(1, 100);

const elUserArray1 = parseInt(prompt('Quanti numeri casuali da 1 a 100 vuoi prendere nel box 1?'));
console.log(elUserArray1);

let array1 = [];

for(let i = 0; i < elUserArray1; i++){
    elements  
    array1.push(elements)
};
console.log(array1);

const elUserArray2 = parseInt(prompt('Quanti numeri casuali da 1 a 100 vuoi prendere nel box 2?'));
console.log(elUserArray2);

let array2 = [];

for(let i = 0; i < elUserArray2; i++){
    elements = getRndInteger(1, 100);
    array2.push(elements)
};
console.log(array2);


// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
//  troviamo la differemza di numeri di elementi
// usiamo la differenza per creare in ciclo per pareggiare il numero di Elementi 
if(array1 > array2) {
    let differenzaArray = parseInt(array1.length - array2.length);
    console.log(differenzaArray);
    for (let i = 0; i < differenzaArray; i++) {
        array2.push(elements[i])
        console.log(array2);
    }
} else {
    let differenzaArray = parseInt(array2.length - array1.length);
    console.log(differenzaArray);
    for (let i = 0; i < differenzaArray; i++) {
        array1.push(elements[i])
    }
}




