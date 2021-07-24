//Tratamento de Erro(Try/Catch/Throw)

function tratarErroELancar(erro){
   //throw new Error('...');
   //throw 10; Posso informar um valor
   //throw true; Posso informar um valor booleano
   //throw 'mensagem'; Posso informar uma string
   throw {
       nome: erro.name,//O erro possui um atributo chamado 'name'
       msg: erro.message,//O erro possui um atributo chamado 'message'
       date: new Date
   }
}

function imprimirNomeGritado(obj){
    //O bloco 'try' é o fluxo que não tem erro
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    /*
    O bloco try é o fluxo que tem erro, ele captura 
    o erro e o trata.
    */
    }catch (e) {
        tratarErroELancar(e);
    /*
    O bloco finally é um bloco opcional, que irá
    ser executado, havendo erro ou não.
    */
    }finally {
        console.log('final');
    }
}

//Não gera erro.
const obj1 = {name: 'Roberto'};
/*
Irá cair no erro, já que não há na função
imprimirNomeGritado o atributo 'nome' e sim
'nome'!
*/ 
const obj2 = {nome: 'Roberto'};

imprimirNomeGritado(obj1);
imprimirNomeGritado(obj2);