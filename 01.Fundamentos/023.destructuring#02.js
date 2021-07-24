//Operadores: Destructuring #02

//Destructuring com arrays

//Selecionando o primeiro item de um array
const [a] = [10];
console.log(a);

/*
No exemplo abaixo os valores 10, 7, 9 e 8
estão sendo atribuídos aos índices 0(n1),
1(indefinido), 2(n3), 3(indefinido) e 4(n5).
O valor de n6 foi padronizado como 0.
*/
const [n1, , n3, , n5, n6 =0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

/*
Selecionando o segundo elemento de um array,
que é um segundo elemento dentro de outro array
*/
const [,[, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);