//Exercício 14

//Crie um array de números e use filter() para obter os números pares.
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(number => number % 2 === 0);
console.log(pares);
//[2,4,6]