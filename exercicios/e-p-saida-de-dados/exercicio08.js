//Pergunte ao usuário dois números e a operação (soma, subtração, multiplicação ou divisão) e exiba o resultado.
let num1 = parseFloat(prompt("Insira o primeiro numero"));
let num2 = parseFloat(prompt("Insira o segundo numero"));
let operacao = prompt("Escolha a operação: +, -, *, /");
let resultado;
if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    resultado = num1 / num2;
} else {
    alert("Operação inválida!");
}
alert("O resultado é: " + resultado);