const km = prompt('Quanti Km devi percorrere?');
const age = prompt("Qual'è la tua eta?");

let percentage = parseInt(km * parseFloat(0.21));
let sale = null;

if (age <= 18) {
    sale = ((percentage / 100) * 20).toLocaleString('it', { minimumFractionDigits: 2 });
} else if (age >= 65) {
    sale = ((percentage / 100) * 40).toLocaleString('it', { minimumFractionDigits: 2 });
} else {
    sale = percentage.toLocaleString('it', { minimumFractionDigits: 2 });
}

document.querySelector('.info').innerHTML = `Ecco la tua tariffa ${sale}€`;
