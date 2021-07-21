//Aula 37 - Declaração de variáveis com Let

let numero = 1;
{
    /*
    Como o escopo de variável do tipo 'let' é de bloco, as variáveis podem coexistir, já que aqui estão em blocos diferentes!
    */
    let numero = 2;
    /*
    Caso não houvesse uma variável let nesse escopo, seria buscada uma no escopo logo acima. Nesse caso ambos 'Console.log' iriam mostrar o valor 1!
    */
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);