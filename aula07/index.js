// Nao podemos criar constantes com palavras reservadas do sistema ex: let let ou let console.
// Constantes precisam ter nomes significativos para facilitar o trabalho
// Constantes nao podem comecar com numeros
// Constantes nao podem conter espacos ou tracos no nome.
// Utilizamos camelCases ex: let = 'nomeCompletoDoCliente'
// Constantes sao case sensitives.
// Nao podemos modificar o valor de uma constante.

const nome = "Jonas";

console.log(nome);

// + - * /  sao operadores aritmeticos

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

// para descobrir o tipo de uma variavel posso usar typeof

console.log(typeof primeiroNumero);
