//Aula 81 - Usando a Estrutura WHILE

/*
 * O while é indicado quando a quantidade de 
 * repetições não é definida.
 * É uma estrutura de repetição baseada em um
 * valor booleano.
*/

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
}
console.log('Até a próxima!');