//Tipos em JavaScript: Boolean

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
//!! Transforma variável em booleano(Todos números inteiros retornam verdadeiro, com exceção do zero);
console.log(!!isAtivo)

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo =  true));

console.log('Os falsos....');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Finalizando...');
//No exemplo abaixo, apenas 'epa'é verdadeiro. Como está sendo usado o OR, retornará verdadeiro.
console.log(!!('' || null || 0 || 'epa'));

let nome = '';
//Exibirá o nome. Se for falso(nesse caso vazio), retornará 'Desconhecido'.
console.log(nome || 'Desconhecido');

