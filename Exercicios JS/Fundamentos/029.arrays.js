//Aula 29 - Tipos em JavaScript: Array

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
//Como nesse momento o índice 4 não existe, será retornado 'undefined'
console.log(valores[4]);

valores[4] = 10;
console.log(valores);

//Os índices de 5 à 9 estarão vazios.
valores[10] = 10;
console.log(valores);

//Informa a quantidade de elementos no array
console.log(valores.length);

//Adcionando itens ao fim do array
valores.push({id:3}, false, null, 'teste');
console.log(valores);

//Remove o último valor do array
console.log(valores.pop());
console.log(valores);

//Removendo item pelo índice
delete valores[0];
console.log(valores);

console.log(typeof valores);