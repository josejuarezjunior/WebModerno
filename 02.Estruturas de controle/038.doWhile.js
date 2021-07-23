//Aula 66 - Usando a Estrutura DO/WHILE

/*
 * A estrutura Do While, garante que o laço
 * seja executado ao menos uma vez(caso a 
 * a condição seja falsa), já que primeiro 
 * executa o bloco de código, somente após 
 * isso verifica a condição
*/

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
}while(opcao != -1)
console.log('Até a próxima!');