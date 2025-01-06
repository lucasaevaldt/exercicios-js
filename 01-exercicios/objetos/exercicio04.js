//Exercício 04

//Crie um método chamado descrever no objeto carro que exiba no console uma mensagem com todas as propriedades do carro.

let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2022 
}

carro.cor = "Branco";
carro.ano = 2023;
carro.descrever = function() {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
} 
carro.descrever();
//Carro: Chevrolet Onix, Ano: 2023, Cor: Branco