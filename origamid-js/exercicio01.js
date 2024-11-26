/* Verifique se a sua idade é maior do que a de algum parente,dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'*/
let minhaIdade = 31;
let idadeParente = 32;

if (minhaIdade > idadeParente) {
    console.log("É maior");
} else if (minhaIdade === idadeParente) {
    console.log("É igual");
} else {
    console.log("É menor");
}
// Saida: É menor

/* Qual valor é retornado na seguinte expressão? */
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// Saida:

/* Verifique se as seguintes variáveis são Truthy ou Falsy */
var nome = 'Andre'; // Saida: true
var idade = 28; true
var possuiDoutorado = false; // Saida: false
var empregoFuturo; // Saida: false
var dinheiroNaConta = 0; // Saida: false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

/* Compare o total de habitantes do Brasil com China (valor em milhões) */
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log("Brasil tem nais habitantes que a China");
} else {
    console.log("China tem Mais habitantes que o Brasil");
}
// Saida: China tem Mais habitantes que o Brasil

/* O que irá aparecer no console? */
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Saida: Falso

/* O que irá aparecer no console? */
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
}
// Saida: Cão