
var genera = document.getElementById('genera');

genera.addEventListener('click', function(){

    var livello = document.getElementById('level').value;

    var levelDifficult;
    switch(livello){
        case '2':
            levelDifficult = 32;
            break;
        case '3':
            levelDifficult = 45;
            break;
        default: levelDifficult = 16;
    }
    console.log(livello);

    

    // ?STEP 1 Il computer deve generare 16 numeri casuali tra 1 e 100.


    // *Abbiamo un array vuoto, dove dobbiamo inserire, ogni volta, 16 numeri casuali tra 1 e 100.
    var numRand = [];

    // *La funzione creata serve per generare in modo randomico dei numeri.
    function random(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // ?STEP 2 I numeri non possono essere duplicati. 


    // *Per evitare duplicati, conviene utilizzare il while al posto del for. La versione for è comunque scritta e commentata alla fine del codice js.

    while(numRand.length < levelDifficult){
        if (!numRand.includes(random(1, 100))){
            numRand.push(random(1,100));
        }
    }
    console.log(numRand);


    // ?STEP 3 Il computer, in seguito, deve chiedere all’utente (84) volte di inserire un numero compreso tra 1 e 100. uno alla volta.

    // *Creiamo quindi un arrayUtente vuoto dove andremo ad inserire ogni volta il numero scelto dall'utente.
    var arrayUtente = []

    // *Utilizziamo il while, così facendo il ciclo continuerà FINTANTOCHÈ non beccherà una bomba.
    var i = 0;

    while(i <= 84)
    {
        var numeroScelto = parseInt(prompt('Scegli un numero tra 1 e 100'));
    
        // !L'utente dovrà scegliere per forza un numero compreso tra 1 e 100, quindi inseriamo degli alert.
        if (numeroScelto < 1 || numeroScelto > 100 || isNaN(numeroScelto) )
        {
            alert('Inserire il numero corretto');
        }
        i++;

        // ?STEP 4 L’utente non può inserire più volte lo stesso numero. 

        if (!arrayUtente.includes(numeroScelto) && numeroScelto >= 1 && numeroScelto <= 100){
            arrayUtente.push(numeroScelto);
            console.log(arrayUtente);
        } 
        else {
            alert('Non inserire lo stesso numero');
        }
        // console.log(numeroScelto);

        // ?STEP 5 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        // ?STEP 6 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        if (numRand.includes(numeroScelto)){
            alert('Hai perso');
            document.getElementById('bomba').innerHTML = 'Oh no! Hai beccato una bomba! ' + numeroScelto + ' <i class="fas fa-bomb"></i>';
            document.getElementById('punti-totalizzati').innerHTML = 'Hai totalizzato ' + (arrayUtente.length - 1) + ' punti <i class="fas fa-trophy"></i>';
            break;
        } else if (numeroScelto.length <= 84){
            alert('Hai vinto');
            document.getElementById('vittoria').innerHTML = 'Complimenti! Hai vinto!!'
            break;
        }

        // ?STEP 7 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

        document.getElementById('numeri').innerHTML = arrayUtente + ' ';
        // console.log(numeroScelto);

    }
});












// !PROVE

// -----------------------------------------------------------------------

// *Si potrebbe utilizzare il for, tuttavia, all'interno dell'array, si otterranno dei duplicati.
// *Con il for si andranno a pushare i numeri creati all'interno dell'array creato.
// for( var i = 1; i <= 16; i++)
// {
    // se l'array non include i numeri creati, pushali all'interno.
//     if (!numRand.includes(random(1, 100))){
//         numRand.push(random(1,100));
//     } else
//     {
//         i--;
//     }   
// }
// console.log(numRand);












// TODO BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50.