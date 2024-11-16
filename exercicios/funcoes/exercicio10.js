//Exercício 10

//Crie uma função chamada ehBissexto que receba um ano e retorne true se for um ano bissexto e false se não for.

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

console.log(ehBissexto(1995)); //false
console.log(ehBissexto(1992)); //true