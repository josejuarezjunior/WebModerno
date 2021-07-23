//Aula 61 - Usando a Estrutura IF #02

function teste1(num){
    if(num > 7)
    /*
    Quando há somente uma linha de sentença
    no 'if', é permitido omitir as chaves({}).
    Nesse caso foram omitidas as chaves, porém
    como há mais uma linha de sentença no código,
    ele será executado fora do bloco 'if', não
    funcionando da maneira desejada. O correto é
    usar chaves nesse caso.
    */
        console.log(num);
        console.log('Final');
}

teste1(6);
teste1(8);

function teste2(num){
    if(num > 7); {// cuidado com  o ';', não usar com estruturas de controle!!!
        console.log(num);
    }
}

teste2(6);
teste2(8);