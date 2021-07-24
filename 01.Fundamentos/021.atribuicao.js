//Operadores: Atribuição

/*
O sinal '=', assim como em outras linguagens de programação, é o sinal de atribuição de valor.
No exemplo abaixo, o valor 7 está sendo atribuído
à constante 'a'.
*/
const a = 7;
console.log(`const a = ${a}`);
let b = 3;
console.log(`let b = ${b}`);

//Atribuição aditiva
b += a;//b = b + a
console.log(`b += a = ${b}`);

//Atribuição subtrativa
b -= 4; // b = b - 4
console.log(`b -= 4 = ${b}`);

//Atribuição multiplicativa
b *= 2; // b = b * 2
console.log(`b *= 2 = ${b}`);

//Atribuição divisiva
b /= 2; // b = b / 2
console.log(`b /= 2 = ${b}`);

//Atribuição modular
b %= 2; // b =  b % 2
console.log(`b %= 2 = ${b}`);