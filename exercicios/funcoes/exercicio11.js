//Exercício 11

//Crie uma função chamada inverterString que receba uma string e retorne essa string invertida.
function inverterString(texto) {
    return texto.split('').reverse().join('');
}

console.log(inverterString("JavaScript")); //tpircSavaJ