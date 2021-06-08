//? STEP 1 Il computer deve generare 16 numeri casuali tra 1 e 100.

//? STEP 2 I numeri non possono essere duplicati. 

//? STEP 3 Il computer, in seguito, deve chiedere all’utente (84) volte di inserire un numero compreso tra 1 e 100, uno alla volta.

//? STEP 4 L’utente non può inserire più volte lo stesso numero. 

//? STEP 5 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//? STEP 6 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. 

//? STEP 7 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// ! Abbiamo un array vuoto, dove dobbiamo inserire, ogni volta, 16 numeri casuali tra 1 e 100.
var numRand = [];

// ! Si potrebbe utilizzare il for, tuttavia, all'interno dell'array, si otterranno dei duplicati.


// * La funzione creata serve per generare in modo randomico dei numeri.
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// * Con il for si andranno a pushare i numeri creati all'interno dell'array creato.
for( var i = 1; i <= 16; i++)
{
    // * se l'array non include i numeri creati, pushali all'interno.
    if (!numRand.includes(random(1, 100))){
        numRand.push(random(1,100));
    } else
    {
        i--;
    }   
}
// console.log(numRand);

// TODO-----------------------------------------------------------------------------------------------------------



// ! Per evitare duplicati, conviene quindi utilizzare il while.

while(numRand.length < 16){
    if (!numRand.includes(random(1, 100))){
        numRand.push(random(1,100));
    }
}
console.log(numRand);



// * richiesta di 84 volte di inserire un numero compreso tra 1 e 100.

for(var i = 0; i <= 84; i++)
{
    var scegli = prompt('Scegli un numero tra 1 e 100');
    console.log(scegli);

}



















// TODO BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50.