console.log('JS OK')
// Elemento dove printare il risultato 
const resultField = document.getElementById('resultField');

// Elemento dove inserire ogni valore del loop
let boxField = '';

// Creato il loop e l'ho fatto partire da 1 per non avere il fizzbuzz a 0
for(let i = 1; i <= 100; i++) {
    // Se il numero è multiplo di 3 o 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
        boxField += `<div class="col"><div class="box fizz buzz">FizzBuzz!!</div></div>`
    // Se il numero è multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz")
        boxField += `<div class="col"><div class="box buzz">Buzz!!</div></div>`
    // Se il numero è multiplo di 3
    } else if (i % 3 === 0) {
        console.log("Fizz")
        boxField += `<div class="col"><div class="box fizz">Fizz</div></div>`
    // Tutti gli altri numeri 
    } else {
        console.log(i)
        boxField += `<div class="col"><div class="box">${i}</div></div>`
    }
}

// Stampa in pagina 
resultField.innerHTML = boxField;