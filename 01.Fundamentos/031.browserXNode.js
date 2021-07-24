//Contexto de Execução: Browser vs Node

/*
Uma variável do tipo let é de escopo local,
diferentemente de uma do tipo var, que é de
escopo global.
*/
let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
//O 'global' no node, equivale ao 'window' no browser.
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
//Dentro de um arquivo, o 'module.exports' equivale ao 'this'
console.log(module.exports === this);
/*
Dentro de node, cada arquivo é um módulo diferente
*/
console.log(module.exports);

/*
Criando uma variável maluca, sem 'var' ou 'let'.
Ao ser criada assim, ela está sendo criada no
escopo global do node.
*/
abc = 3;//Não faça isso!

console.log(global.abc);


