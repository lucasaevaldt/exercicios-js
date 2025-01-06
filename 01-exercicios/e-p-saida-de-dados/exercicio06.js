//Pergunte ao usuário um número e informe se ele é par ou ímpar.
let numero = parseInt(prompt("Insira um número:"));
if(numero % 2 === 0) {
    alert(numero + " é par.");
} else {
    alert(numero + " é impar.");
}