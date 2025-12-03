

// TRACCIA 3
/* Scrivi un programma che dato l'anno corrente ed il tuo anno di nascita determini:

l'età della persona
quanti anni sono necessari per raggiungere i 100
e restituisca in output entrambi i risultati.

Ad esempio:

input: anno corrente 2023, anno di nascita 1998
output: hai 25 anni e ti mancano 75 anni per compierne 100*/

var firstName = prompt("inserisci il tuo nome");  // otterrete una string
var bornDate = Number(prompt("inserisci il tuo anno di nascita nel formato 0000"));  // otterrete un number
while(isNaN(bornDate)){
    // Messaggio di errore e nuova richiesta
    alert("ERRORE: Devi inserire un numero valido nel formato 0000!"); 
    bornDate = Number(prompt("INSERIMENTO ERRATO. Inserisci il tuo anno di nascita nel formato 0000"));
}

var currentYear = Number(prompt("inserisci l'anno corrente nel formato 0000"));  // otterrete un number
while(isNaN(currentYear)){
    // Messaggio di errore e nuova richiesta
    alert("ERRORE: Devi inserire un numero valido nel formato 0000!"); 
    currentYear = Number(prompt("INSERIMENTO ERRATO. Inserisci il tuo anno di nascita nel formato 0000"));
}

var personAge = currentYear - bornDate
var neededYears = 100 - personAge



console.log("Questa persona si chiama", firstName, ", è nata nel", bornDate, " e quindi ha", personAge, ", siamo nel", currentYear, " e quindi le mancano ",neededYears, "anni", " per arrivare a 100 anni")



