/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
In JavaScript ci sono diversi datatype, partiamo con i principali:
- il dato Numerico 
JavaScript ha un unico tipo di dato numerico, cioè non c'è distinzione tra intero e decimale; se NON è specificata la parte 
decimale il numero viene trattato come intero. Per indicare un numero decimale quindi, dobbiamo specificarlo con il . ex 1.2
il dato numerico verrà inserito senza l'utiizzo delle ''(virgolette) o "" in modo che Js legga correttamente numeri e non una STRINGA 

- Stringa "Nel linguaggio informatico italiano una sequenza di caratteri viene chiamata stringa" per questo
un inguaggio di programmazione deve permettere di maneggiare non soltanto numeri, ma anche caratteri di testo.
al contrario del dato numerico, per visualizzare la stringa dobbiamo inserire il testo e/o numeri all'interno delle '' (virgolette) 
o ""

- Booleano
E' il tipo di dato booleano. Può assumere solo i valori true (vero) o false (falso).

- Null
Questo data type lo rilevo nelle variabili che ho dichiarato ma a cui non ho ancora assegnato un valore.
Diamo intenzionalmente il valore Null

-Undefined
Questo data type lo rilevo quando qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.

/*


/* ESERCIZIO 2
Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Emanuel' ;
console.log (myName) ;

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12

console.log( a + 20)

console.log (12+20)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Incarnato'

console.log (myName)

const testimpossibilità = 'Ovolollo'

//testimpossibilità = 'Sblindol'  /*rimuovere il commento " // " per verificare*/

console.log (testimpossibilità)


/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottr = x-4
console.log (sottr)

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'

console.log (name1 === name2)

console.log (name1.toLocaleLowerCase() === name2.toLowerCase ())