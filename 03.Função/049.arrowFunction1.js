//Função da maneira convencional

let dobro = function (a) {
    return 2 * a;
}

/**
 * Como foi declarada como 'let' poderá ser 
 * sobrescrita várias vezes para exemplo.
 */

//Mesma função acima, mas como Função arrow
/**
 * É sempre uma função anônima. Para invocá-la
 * é necessário armazená-la em uma constante
 * ou uma variável.
 */
dobro = (a) => {
    return 2 * a;
}

/**
 * Nesse caso tem apenas um parâmetro, pode-se 
 * omitir os parênteses.
 */

dobro = a => 2 * a; //'return' aqui é implícito. O Uso de chaves({}) torna o uso do 'return' obrigatório, assim como o exemplo acima.
console.log(dobro(Math.PI));


/*----------------------------------------*/

let ola = function() {
    return 'Olá';
}

//Refatorando a função acima para arrow

ola = () => 'Olá';
//ola = _ => 'Olá';Poderia ser dessa forma, já que o '_' é uma parâmetro válido.
console.log(ola());