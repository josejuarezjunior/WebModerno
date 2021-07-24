//Entendendo o Hoisting

/*
No exemplo abaixo, a variável 'a' não foi declarada,
porém ao ser utilizada, é informada ser 'undefined',
ou seja, ela existe mas ainda não foi definida.
*/
console.log('a = ', a);
/*
O que possibilitou o caso acima foi o 'hoisting',
que pegou a declaração posterior da variável e 
'içou'(hoisting) ela.
*/
var a = 2;
console.log('a = ', a);

/*
Essa possibilidade de 'hoisting' não é possível
com uma variável do tipo 'let'!
*/
