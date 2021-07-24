//Parâmetros Variáveis

function soma() {
    let soma = 0;
    /**
     * 'arguments' é um array interno de uma função que 
     * permite o uso de parâmetros variáveis!!!!
     */
    for (i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(0));
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
//Concatena um number com uma string!
console.log(soma(1.1, 2.2, 'Teste'));
/**
 * O 0 no começo se deve à variável let soma
 *  da função que se inicia com 0.
 */
console.log(soma('a', 'b', 'c'));