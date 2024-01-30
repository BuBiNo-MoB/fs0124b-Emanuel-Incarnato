/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
  let a = 10;
  let b = 5;

  if(a > b)
  {
    console.log('eseguito');
  } 
  else if(a < b)
  {
    console.log('non eseguito')
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  let a = 2
  if(a !== 5){
    console.log('not equal')
  }
  else if(a === 5){
    console.log('equal')
  }


}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

{
  let a = 10

  if (a % 5 === 0){
  console.log('divisibile per 5')
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

{
  let a = 0
  let b = 8

  if (a === 8 || b === 8 || a + b === 8 || a - b === 8) 
  {
    console.log("uguale a 8");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

{
  let totalShoppingCart = 55
  let shippingCost = totalShoppingCart > 50 ? 0 : 10; 
  /*L’operatore ternario '?' viene utilizzato per controllare se il totale 
  del carrello supera 50. Se la condizione è vera, la variabile shippingCost viene impostata a 0 (spedizione gratuita), 
  altrimenti viene impostata a 10 (costo fisso della spedizione) */

  if (totalShoppingCart > 50){
    console.log('spedizione gratuita')
  }
  else if (totalShoppingCart < 50){
    console.log('spedizione a pagamento')
  }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
{
  let ShoppingCart = 100

  let shippingCost = ShoppingCart > 50 ? 0 : 10;

  let blackfridayDiscount = ShoppingCart * 0.2

  let totalShoppingCart = ShoppingCart - blackfridayDiscount

  console.log('totale carrello' , totalShoppingCart)
  
  if (totalShoppingCart > 50){
    console.log('spedizione gratuita')
  }
  else if (totalShoppingCart < 50){
    console.log('spedizione a pagamento')
  }
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*{
  let numero1 = 8
  let numero2 = 12
  let numero3 = 4

  if (numero1 > numero3 && numero2 > numero3){
    console.log(numero3, numero1, numero2)
  }
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
{
let valore = 44

if (typeof valore === "number") {
  console.log("Il valore fornito è un numero");
} else {
  console.log("Il valore fornito non è un numero");
}
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let a = 7

  if (a % 2 === 0){
  console.log('numero pari')
  }
  else {console.log ('numero dispari')}
}

/* SCRIVI QUI LA TUA RISPOSTA */

 /*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/


  let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2]

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];

array.push(1,2,3,4,5,6,7,8,9,10);

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.splice(9,1,100);

console.log(array)