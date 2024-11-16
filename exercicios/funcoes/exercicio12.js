//Exercício 12

//Crie uma função chamada ehPalindromo que receba uma palavra e retorne true se for um palíndromo e false caso contrário.
function ehPalindromo(palavra) {
    const invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}

console.log(ehPalindromo("arara")); //true
console.log(ehPalindromo("gato")); // false