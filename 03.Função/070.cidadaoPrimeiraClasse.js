//Aula 70 - Cidadão de Primeira Linha

//Função em JS é First-Class Object (Citizens)
//Higher-order function


/**
 * O retorno de uma função é opcional.
 * Caso não tenha retorno, a função 
 * retorna 'undefined'
 */

//Criar função de forma literal
function nomeFuncao(/*Parâmetros, se houver*/){/*Esse bloco é obrigatório*/};//A finalização com ';' não é obrigatória
function fun1() {};

// Armazenar em uma variável
/**
 * Função anônima, nesse caso para chamar
 * a função, é só informar o nome da constante
 * com os parênteses e os argumentos
 */
const fun2 =  function () { };

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3));

//Armarzenar em um atributo de objeto
const obj = {};
obj.falar =  function () {return 'Opa'};
console.log(obj.falar());

//Passar uma função como param
function run(fun){
    fun();
}

run(function () { console.log('Executando....')});

//Uma função pode retornar/conter uma função
function soma(a, b) {//Primeira função
    return function (c) {//Segunda função
        console.log(a + b + c);
    }
}

//Primeiro parênteses = função 1, segundo parênteses = função 2!!!
soma(2, 3)(4);
//As duas linhas abaixo tem o mesmo efeito da linha acima!
const cincoMais = soma(2 , 3);
cincoMais(4)