//Converter segundos para horas, minutos e segundos
let segundosTotais = 3661;
let horas = Math.floor(segundosTotais / 3600);
let minutos = Math.floor((segundosTotais % 3600) / 60);
let segundos = segundosTotais % 60;
console.log(horas + " horas, " + minutos + " minutos e " + segundos + " segundos")