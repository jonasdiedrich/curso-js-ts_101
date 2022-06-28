// alert("Nossa mensagem");

let num1 = prompt("Digite um numero:");
let num2 = prompt("Digite outro numero:");

console.log(num1, num2);

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert("O resultado foi: " + resultado);
alert(`O resultado foi: ${resultado}`); // fica melhor usando templates strings
`O resultado foi: ${num1 + num2}`; // poderia colocar direto a conta, dai nao eh necessario a const `resultado`
