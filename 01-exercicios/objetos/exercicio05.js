//Exercício 05

//Remova a propriedade cor do objeto carro e tente exibi-la no console.

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
delete carro.cor;
console.log(carro.cor);
//undefined