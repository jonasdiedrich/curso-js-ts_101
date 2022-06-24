/*
Jonas Diedrich tem 30 anos, pesa 75kg e tem 1.80m de altura e seu IMC e de ??
Jonas nasceu em 1992.
*/

const nome = "Jonas";
const sobrenome = "Diedrich";
const idade = 30;
const peso = 75;
const alturaEmM = 1.8;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(nome, "nasceu em", anoNascimento + ".");

console.log(
  nome +
    " " +
    sobrenome +
    " tem " +
    idade +
    " anos, pesa " +
    peso +
    "kg, tem " +
    alturaEmM +
    "m de altura e seu IMC e de " +
    imc +
    "."
);

// template strings para ficar maus legivel
console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM}m de altura e seu IMC e de ${imc}. `
);
