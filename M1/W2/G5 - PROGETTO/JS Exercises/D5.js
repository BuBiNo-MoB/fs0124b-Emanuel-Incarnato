/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

  pets.sort();
  console.log(pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

  pets.reverse()
  console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

  pets.push(pets.splice(0, 1)[0])
  console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let licensePlate = ['DG006VB', 'BN530TW', 'DG006VP']
cars.forEach(function(car, index) {
  Object.assign(car, { licensePlate: licensePlate[index] })
})
console.log(cars)


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = {
  brand: 'Maserati',
  model: 'Grecale',
  color: 'white moon',
  trims: ['trofeo', 'modena', 'gt']
}
cars.push(newCar)

for (let car of cars) {
  car.trims.pop()
}

console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  let car = cars[i]
  let firstTrim = car.trims[0]
  justTrims.push(firstTrim)
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  let car = cars[i]
  let color = car.color
  let firstLetter = color.charAt(0)
  if (firstLetter.toLowerCase() === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

while (i < numericArray.length) {
  console.log(numericArray[i])
  if (numericArray[i] === 32) {
    break
  }  i++}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

function posizioniAlfabetoItaliano(caratteriIta) {
  const alfabetoItaliano = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const posizioni = []

  for (let carattereIta of caratteriIta) {
    switch (carattereIta.toLowerCase()) {
      case 'a':
        posizioni.push(alfabetoItaliano.indexOf('a') + 1);
        break;
      case 'b':
        posizioni.push(alfabetoItaliano.indexOf('b') + 1);
        break;
      case 'c':
        posizioni.push(alfabetoItaliano.indexOf('c') + 1);
        break;
      case 'd':
        posizioni.push(alfabetoItaliano.indexOf('d') + 1);
        break;
      case 'e':
        posizioni.push(alfabetoItaliano.indexOf('e') + 1);
        break;
      case 'f':
        posizioni.push(alfabetoItaliano.indexOf('f') + 1);
        break;
      case 'g':
        posizioni.push(alfabetoItaliano.indexOf('g') + 1);
        break;
      case 'h':
        posizioni.push(alfabetoItaliano.indexOf('h') + 1);
        break;
      case 'i':
        posizioni.push(alfabetoItaliano.indexOf('i') + 1);
        break;
      case 'l':
        posizioni.push(alfabetoItaliano.indexOf('l') + 1);
        break;
      case 'm':
        posizioni.push(alfabetoItaliano.indexOf('m') + 1);
        break;
      case 'n':
        posizioni.push(alfabetoItaliano.indexOf('n') + 1);
        break;
      case 'o':
        posizioni.push(alfabetoItaliano.indexOf('o') + 1);
        break;
      case 'p':
        posizioni.push(alfabetoItaliano.indexOf('p') + 1);
        break;
      case 'q':
        posizioni.push(alfabetoItaliano.indexOf('q') + 1);
        break;
      case 'r':
        posizioni.push(alfabetoItaliano.indexOf('r') + 1);
        break;
      case 's':
        posizioni.push(alfabetoItaliano.indexOf('s') + 1);
        break;
      case 't':
        posizioni.push(alfabetoItaliano.indexOf('t') + 1);
        break;
      case 'u':
        posizioni.push(alfabetoItaliano.indexOf('u') + 1);
        break;
      case 'v':
        posizioni.push(alfabetoItaliano.indexOf('v') + 1);
        break;
      case 'z':
        posizioni.push(alfabetoItaliano.indexOf('z') + 1);
        break;
      default:
        posizioni.push(null);
    }
  }
  return posizioni
}

const arrayDiCaratteri = ['a','b','c','d','e','f','p','q','r','z']
const risultato = posizioniAlfabetoItaliano(arrayDiCaratteri)

console.log(risultato)