//Aula 52 - Operadores: Relacionais

/*
O resultado de toda operação com operadores
relacionais é 'true' ou 'false'!
*/
/*
Esse resultado irá retornar 'true', por uma
particularidade do JavaScript, que nesse caso
não considera os tipos dos operandos.
*/
console.log('01) "1" = 1 :','1' == 1 );
/*
Para comparar os valores e os tipos também,
deve-se usar '==='.
Se diz "Variável 1 é estritamente igual à 
variável 2?"
*/
console.log('02) "1" === 1 :','1' === 1 );

//Irá gerar 'true', pois não considera o tipo
console.log('03) "3" != 3 :','3' != 3);
//Irá gerar 'false', pois considera o tipo
console.log('04) "3" !=== 3 :', '3' !== 3 );

console.log('05) 3 < 2', 3 < 2);
console.log('06) 3 > 2', 3 > 2);
console.log('07) 3 <= 2', 3 <= 2);
console.log('08) 3 >= 2', 3 >= 2);

console.log('Exemplos com datas:')
/*
A data 0 em JavaScript por padrão é 01/01/1970!
Há diferença por causa do fuso horário.
*/
const d1 = new Date(0);
const d2 = new Date(0);
/*
Como nesse caso há a comparação de variáveis
com endereço de memória, não faz diferença do
uso de '==' ou '==='. Nesse caso, cada uma tem
um endereço próprio e irá retornar 'false'
*/
console.log(`09) ${d1} == ${d2}`, d1 == d2);
console.log(`10) ${d2} === ${d2}`, d1 === d2);
/*
Usando o método 'getTime()', que transforma a 
variável em milisegundos, ou seja, ambas serão
iguais já que são um valor do tipo 'Number'!
*/
console.log(`11) Usando o método 'getTime(): ${d2} == ${d2}`, d1.getTime() === d2.getTime());
console.log(`12) Usando o método 'getTime(): ${d2} === ${d2}`, d1.getTime() === d2.getTime());
console.log('13) undefined == null', undefined == null);
console.log('14) undefined === null', undefined === null);

