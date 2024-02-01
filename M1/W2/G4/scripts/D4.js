/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

{

function area( b , h ){
    return b*h;
}

console.log('area del rettangolo =', area(11,12))

}


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


{
function crazySum(a , b){
    if (a === b){
        return (a+b)*3
    }else{
        return a+b;}
    }

    console.log(crazySum(8,8))
    console.log(crazySum(8,20))
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


function crazyDiff(x){
    let diffAss = Math.abs(x - 19);
    if (x > 19 ){
        return diffAss * 3
    }else {
        return diffAss
    }
}

console.log(crazyDiff(17))
console.log(crazyDiff(25))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n >= 20 && n <= 100){
        console.log(true)
    }
    else if( n == 400 ){
        console.log(true)
    }
    else if( n > 100 && n < 400 ){
        console.log(false)
    }
}
boundary(101)
boundary(21)
boundary(400)


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora
 deve ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
        return stringa;
    } else {
        return "EPICODE " + stringa;
    }
}

console.log(epify("EPICODE"))
console.log(epify("casa"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia 
 un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n){
    if(n % 3 == 0 || n % 7 == 0){
        console.log(true)
    }else{
        console.log(false)
    }
}
check3and7(5)
check3and7(6)
check3and7(21)
check3and7(23)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
    const characters = string.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
    return reversedString;
}
const input = "EPICODE";
const reversedOutput = reverseString(input);
console.log(reversedOutput); 



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(){
    return Math.floor(Math.random() *10)+1;
    }
    console.log(giveMeRandom())