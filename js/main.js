// v1.0 🤣
/*let km = prompt('Quanti Km devi percorrere?');
let age = prompt("Qual'è la tua eta?");
const IVA = 0.21;

 if (age <= 18) {
    total = (percentage / 100) * 20 + ',00';
} else if (age >= 65) {
    total = (percentage / 100) * 40 + ',00';
} else {
    total = percentage + ',00';
}
document.querySelector('.info').innerHTML = `La tua tariffa è: ${total}€`; */

// v1.1 😍
let km = prompt('Quanti Km devi percorrere?');
let age = prompt("Qual'è la tua eta?");
let total = 0;
const IVA = 0.21;

const tariff = parseInt(km * IVA);
if (age <= 18) {
    total = ((tariff / 100) * 20).toLocaleString('it', { minimumFractionDigits: 2 });
} else if (age >= 65) {
    total = ((tariff / 100) * 40).toLocaleString('it', { minimumFractionDigits: 2 });
} else {
    total = tariff.toLocaleString('it', { minimumFractionDigits: 2 });
}
document.querySelector('.info').innerHTML = `La tua tariffa è: ${total}€`;
