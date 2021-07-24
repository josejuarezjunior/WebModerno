//Usando a Estrutura SWITCH

const imprimirResultado = function(nota){
    //O 'Math.floor' arredonda o valor pra baixo
    /*
     * O switch não testa um valor booleano e sim um valor.
    */
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra');
            //Necessário o 'break' para não executar os próximos cases
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
            /*
            Como o 'default' está por último nessa função
            o 'break' não é necessário, porém se o 'default' estiver em outra posição(o que é permitido), o 'break' deve ser utilizado!
            */
            break;
    }
    console.log('Fim!')
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);