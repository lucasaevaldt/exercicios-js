//Converter um número de dias para semanas e dias restantes
let diasTotais = 10;
let semanas = Math.floor(diasTotais / 7);
let diasRestantes = diasTotais % 7;
console.log(semanas + " semanas e " + diasRestantes + " dias");