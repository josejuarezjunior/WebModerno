//Operadores: Aritméticos

/*
Aqui não se trata da criação de uma array,
e sim uma forma simprlificada de criar 
variáveis utilizando o destructuring!!!
*/
const [a, b, c, d] = [3, 5, 1, 15];

/*
Por baixo dos panos, primeiro é feita a soma
de 'a' + 'b', depois esse resultado + 'c' e esse
outro resultado + 'd'.
Essa característica é chamada 'Operadores binários'!!!
Também chamado de sintaxe 'infix':

prefix : ++variável
Infix  : variável 1 + variável 2
postfix: variável++
*/
const soma =  a + b + c + d;
const subtracao =  d - b;
const multiplicacao =  a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(`a = ${a}, b = ${b}, c = ${c} e d = ${d}.`)
console.log('Soma a + b + c + d : ', soma);
console.log('Subtracão d - b :', subtracao);
console.log('Multiplicação a * b: ', multiplicacao);
console.log('Divisão d / a:', divisao);
console.log('Módulo(resto da divisão de a por 2): ', modulo);
