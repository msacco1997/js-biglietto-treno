//L’esercizio richiede di fare un minimo di controlli sui dati inseriti dall’utente.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


//Km da percorrere
let userKm = prompt('Number of travelling KMs (in numbers)...')
console.log(userKm)
if (isNaN(userKm)) {
    alert('Insert KM in NUMBERS!!!')
    userKm = parseInt(prompt('Number of travelling KMs...'))
}
console.log(userKm)


//Eta' con annessi if per verificarne la veridicita'
let userAge = prompt('Age of the passenger...')
console.log(userAge)
if (isNaN(userAge)) {                      // controllo se età è scritta in numero
    alert('Insert age in NUMBERS!!!');
    userAge = parseInt(prompt('Age of the passenger...'));
}
 else if (userAge > 0 || userAge < 110) {
    alert('Insert a VALID AGE!!!');
    userAge = parseInt(prompt('Age of the passenger...'));
 }
 console.log(userAge)

 
/* Rules:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


//Prezzo non arrotondato
let userPrice = userKm * 0.21
if  (userAge < 18) {
    userPrice = userPrice * 0.80
}
else if (userAge > 65) {
    userPrice = userPrice * 0.60
}
//console.log(userPrice)

//Prezzo arrotondato del biglietto
const userRoundedPrice = Math.round(userPrice * 100) / 100
//console.log(userRoundedPrice)


//Print HTML
document.getElementById('price').innerHTML += userRoundedPrice + '$'