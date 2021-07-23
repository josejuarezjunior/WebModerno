//Aula 33 - Exemplos Básicos de Função #01

/*
Uma função é um verbo, é uma ação. Ela executa um processo baseado em sentenças de código.
Uma função é delimitada por chaves({}), com um bloco de código que possui as sentenças que serão executadas quando a função for chamada.
*/

/*
function nomeDaFuncao(parâmetros){
    bloco de código
}
*/

console.log('Função sem retorno');

function imprimirSoma(a, b) {
    console.log(a + b);
}

//Retornará 5
imprimirSoma(2, 3);
//Retornará 'NaN'(Not a number), já que o segundo parâmetro não foi definido. Portanto, 2 + 'undefinded' = 'NaN'.
imprimirSoma(2);
//Irá somar os dois primeiros valores e irá ignorar os restantes.
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
//Irá retornar 'NaN', já que nenhum parâmetro foi informado!
imprimirSoma();

console.log();
console.log('Função com retorno');

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
//Sem informar o segundo valor, o mesmo irá assumir valor 0, conforme informado na função!
console.log(soma(2));

