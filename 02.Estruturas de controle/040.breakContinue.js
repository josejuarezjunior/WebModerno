//Aula 69 - Usando Break/Continue

/**
 * O 'break' não funciona em um bloco do tipo
 * 'if'. Ele funciona no 'switch', causando o
 * desvio de fluxo, saindo do 'switch',
 * funciona dentro de um laço 'for' e dentro
 * de um laço 'while'
 * 
 * O 'continue' funciona dentro de um laço 'for'
 * e dentro de um laço 'while'.
 * O 'continue' causa um desvio de fluxo para o 
 * próximo item do laço de repetição, sem sair
 * do mesmo
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums){
    if(x == 5) {
    /**
     * Nesse caso o 'break' está agindo sobre
     * o bloco 'for' e não sobre o 'if'.
     */
        break;
    }
    console.log(`Índice ${x} = ${nums[x]}`);
}

console.log('------------------------');

for (y in nums){
    if (y == 5){
        continue;
    }
    console.log(`Índice ${y} = ${nums[y]}`);
}

console.log('------------------------');


//Externo é um rótulo!
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3){
            /**
             * Esse 'break' com o rótulo,
             * significa que ele irá para o 'break'
             * do laço do rótulo, ou seja, nesse
             * caso, será o 'break' externo!
             */
            break externo;
        }
        console.log(`Par = ${a},${b}`);
    }
}

console.log('Fim!');