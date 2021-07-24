//Usando a Estrutura IF #01

function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com nota ', nota);
    }
}

//Mensagem de aprovado
soBoaNoticia(8.1);
//Sem mensagem
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade.... ', valor);
    }
}

//Sem parâmetro é 'false', já que é 'undefined'
seForVerdadeEuFalo();
//'null' é 'false'
seForVerdadeEuFalo(null);
//'undefined' é 'false'
seForVerdadeEuFalo(undefined);
//NaN é 'false'
seForVerdadeEuFalo(NaN);
//String vazia é 'false'
seForVerdadeEuFalo('');
//Valor 0 é 'false'. Todos números são 'true'. Exceto o 0!
seForVerdadeEuFalo(0);
//Exceto o 0, todos números são 'true'!
seForVerdadeEuFalo(-1);
//String em branco é 'true'
seForVerdadeEuFalo(' ');
//String preenchida é 'true'
seForVerdadeEuFalo('?');
//Array vazio é 'true'
seForVerdadeEuFalo([]);
//Array com elementos é 'true'
seForVerdadeEuFalo([1, 2]);
//Object vazio é 'true'
seForVerdadeEuFalo({});