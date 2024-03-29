/*
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
*/

// 1.
let frigo = [
    'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' 
];
console.log(frigo);

// 2.
frigo.push('pesca');
console.log(frigo);

// 3. ----------FATTO CON .ICLUDES()----------
// if (FRIGO.includes('cocomero')) {
//     console.log("Trovato! Devo solo preparare il cocktail.");
// } else {
//     console.log("Oh no, devo uscire a comprare il cocomero!");
// }

// 3. ----------FATTO CON CICLO FOR----------
let cocomeroPresente = false; 

for (let i = 0; i < frigo.length; i++) {
    if (frigo[i] === 'cocomero') {
        cocomeroPresente = true;
    }
}

if (cocomeroPresente) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}
