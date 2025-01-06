//Exercício 25

//Remova os elementos duplicados de um array usando Set.
let numeros = [1, 2, 2, 3, 4, 4, 5];
let unicos = [...new Set(numeros)];
console.log(unicos);