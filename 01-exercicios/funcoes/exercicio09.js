//Exercício 09

//Crie uma função chamada entreZeroECem que receba um número e retorne true se estiver entre 0 e 100, e false caso contrário.
function entreZeroECem(numero) {
    return numero >= 0 && numero <= 100;
}

console.log(entreZeroECem(35)); //true
console.log(entreZeroECem(101)); //false