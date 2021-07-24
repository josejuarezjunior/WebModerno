//Operadores: Ternário

/*
Utilizando uma função arrow
    nota - parâmetro.
    nota >= 7 - Expressão relacional.
    ? - Operador ternário.
    'Primeira expressão' - Valor se verdadeiro, nesse caso, 'Aprovado'.
    'Segunda expressão' - Valor se falso, nesse caso, 'Reprovado'.
*/
const resultado = nota => nota >= 7 ? 'Aprovado' :'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));