
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Attenzione che usando Google Chrome, il prompt può dare problemi con la visualizzazione dei numeri in pagina sui tempi di refresh del dom, lasciando i numeri visibili mentre il prompt è aperto.



function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function removeNumber(eleContainer){
    eleNumbersRandom.classList.add('remove-numbers')
}

function spanNumber (eleNumberRandom) {
    const text = parseInt(prompt('Inserisci il primo numero'));
    const text2 = parseInt(prompt('Inserisci il secondo numero'));
    const text3 = parseInt(prompt('Inserisci il terzo numero'));
    const text4 = parseInt(prompt('Inserisci il quarto numero'));
    const text5 = parseInt(prompt('Inserisci il quinto numero'))
}

const eleContainer = document.querySelector('.container');
const eleNumbersRandom = document.querySelector('.numbers-random');
let num = getRandomInteger(1,1000);
let num1 = getRandomInteger(1,1000);
let num2 = getRandomInteger(1,1000);
let num3 = getRandomInteger(1,1000);
let num4 = getRandomInteger(1,1000);

setTimeout(removeNumber, 2000);
eleNumbersRandom.innerHTML = (`${num} ${num1} ${num2} ${num3} ${num4}`)
setTimeout(spanNumber, 3001);




