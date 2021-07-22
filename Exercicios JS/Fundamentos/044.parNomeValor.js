//Aula 44 - Par Nome/Valor

//Um objeto é uma coleção de chave e valor

//Contexto léxico 1
const saudacao = 'Opa';

function exec() {
    //Contexto léxico 2
    const saudacao = 'Falaaa';
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);