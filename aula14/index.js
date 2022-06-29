// strings sao iteraveis (cada caractere adquire um valor de 0123...)

let umaString = 'Um "texto" qualquer'; // posso usar a barra invertida para `pular` as aspas duplas dentro do texto em situacoes em que preciso usar aspas duplas par abrir a string tambem...
let outraString = "Um \\texto qualquer"; // posso usar a barra invertida 2 vezes para que eu tenha uma barra invertida na string...
console.log(umaString);
console.log(outraString);
console.log(outraString[4]); // imprime o caractere de posicao 4 da string `outraString` que tem valor = "Um \\texto qualquer"
console.log(outraString.charAt(5)); // mesma coisa da situacao acima.
console.log(outraString.indexOf("texto")); // pesquisa qual eh o indice em que comeca a palavra `texto`, neste caso, posicao 4
console.log(outraString.replace("texto", "papagaio")); // troca o o texto, hehe
console.log(outraString.length); // traz o tamanho da string
console.log(outraString.slice(-5)); // corta a e traz o final da string, o valor negativo comeca a contar do final e volta..
console.log(outraString.slice(0, 2)); // corta a e traz
console.log(outraString.split(" ")); // separa a string
console.log(outraString.toUpperCase()); // traz o texto em maiusculo
console.log(outraString.toLocaleLowerCase()); // traz o texto em minusculo
