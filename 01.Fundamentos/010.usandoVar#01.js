//Declaração de variáveis com Var #01

//O exemplo abaixo mostra que a variável do tipo Var com o escopo global, pois é vista por todos os blocos.

{
    {
        {
            { var sera = 'Sera???';
            console.log(sera);
            }
        }
    }
};

console.log(sera);

/*
Abaixo uma escopo de variável do tipo 'var', com escopo de função, ou seja, ela não fica visível fora dessa função! 
*/

function teste(){
    var local = 123;
    console.log(`Acesso à variável no mesmo bloco: ${local}.`);
}

teste();
/*
//Irá retornar um erro
console.log(`Acesso à variável 'local' fora do bloco: ${local}.`);
*/

