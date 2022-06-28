/*
 Operadores ARITMETICOS
  +  faz adicao ou concatenacao
  - faz subtracao
  * multiplicacao
  / divisao
  ** potenciacao
  % retorna o resto da divisao

  Incremento = ++
  Decremento = --

  Procedencia em ordem de preferencia:
    ()
    **
    * / %
    + -
*/

/*
const num1 = 10;
const num2 = 3;
const texto = "Jonas";
const texto2 = "Diedrich";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log((num1 + num2) * num1);
console.log(texto + texto2);
*/

/*
let contador = 1;
contador++; //atribui +1 ao valor de contador que era 1.
contador++; //atribui +1 ao valor de contador que era 2.
++contador; // posso fazer antes ou pos 
console.log(contador);
*/

/*
let contador = 1;
console.log(contador++); // fazendo antes, ele primeiro `imprime` o valor e depois faz a conta...
console.log(++contador); // fazendo pos ele primeiro faz a conta, e depois imprime...
*/

/*
const passo = 2;
let contador = 0;

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
*/

/*
const passo = 2;
let contador = 0;

contador += passo; // e a mesma coisa que contador = contador + passo
contador -= passo; // e a mesma coisa que contador = contador - passo
contador *= passo; // e a mesma coisa que contador = contador * passo
*/

// NaN = Not a Number
const num1 = 10;
const num2 = "Jonas";

console.log(num1 * num2);

//----------------------------------------------------------------
const num3 = 10;
const num4 = parseInt("5.2"); // transforma em um numero inteiro de valor 5

console.log(num3 * num4);

//----------------------------------------------------------------
const num5 = 10;
const num6 = parseFloat("5.2"); // transforma em um numero dep onto flutuante, leia-se com `virgula`

console.log(num5 * num6);

//----------------------------------------------------------------
const num7 = 10;
const num8 = Number("5.2"); // transforma em um numero.

console.log(num7 * num8);
