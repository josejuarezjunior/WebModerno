//Operadores: Destructuring #04

//Um desctructing com array
function rand([min = 0, max = 1000]){
    /*
    Invertendo as variáveis, caso o 'min' seja
    maior que o 'max'.
    Aqui está sendo criado um novo array com
    'max' e 'min', pois com o destructuring
    são extraídos dois atributos e não um array!!!
    */
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

/*
Informando um número maior no mínimo.
A lógica do programa irá corrigir isso.
*/
console.log(rand([50, 40]));
//Informando apenas o primeiro atributo.
console.log(rand([992]));
//Informando apenas o segundo atributo.
console.log(rand([,10]));
/*
Informando array sem argumento. Irá atribuir
os valores padrões(nesse caso 'min'= 0 e 
'max' = 1000!
*/
console.log(rand([]));

//console.log(rand()); Irá gerar erro!