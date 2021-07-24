//Parâmetro Padrão

//Estratégia 1 para gerar valor padrão

function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log('----------Soma1----------');
console.log(soma1());
console.log(soma1(3));
console.log(soma1(1, 2, 3));
/**
 * O caso abaixo apresenta um problema
 * já que o zero para o algoritmo será 
 * como 'false' e não assumirá 0 e sim
 * o valor padrão definido, aqui 1.
 * Qualquer 0 aqui, se comportará dessa
 * maneira
 */
console.log(soma1(0, 0, 0));

//Estratégias 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c){
    /**
     * Esse caso resolve o problema do exemplo
     * anterior, já que o valor sendo zero, não
     * será 'undefined', já que há um valor
     * atribuído!
     */
    a !== undefined ? a : 1;
    /**
     * Esse caso verifica se o índice 1 de 
     * 'arguments', que é um array interno
     * de toda função, tem um valor.
     */
    b = 1 in arguments ? b : 1;
    /**
     * Verifica se o valor passado é um valor
     * numérico!
     */
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log('----------Soma2----------');
console.log(soma2());
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

//Valor padrão do EcmaScript 2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log('----------Soma3----------');
console.log(soma3());
console.log(soma3(3));
console.log(soma3(1, 2, 3));
console.log(soma3(0, 0, 0));

