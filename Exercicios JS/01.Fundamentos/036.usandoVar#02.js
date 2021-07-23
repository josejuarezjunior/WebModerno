//Aula 36 - Declaração de variáveis com Var #02

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
    
}
console.log('fora = ', numero);

/*
O valor de ambas variveis número será 2, já que não existe escopo de bloco para uma variável do tipo 'var'. Existe apenas quando a mesma está dentro de uma função!
*/