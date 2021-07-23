//Aula 47 - Operadores: Destructuring #01

//Novo recurso do ES2015

//Destructuring com Objetos!
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Destructuring
//Tradução da expressão abaixo: Extraia o atributo 'nome' e 'idade' do objeto 'pessoa'
const {nome, idade} = pessoa;
//Dessa forma, será possível chamar os atributos fora do objeto
console.log(`nome: ${nome}, idade: ${idade}`);

//Fazendo o destructuring, mas renomeando o atributo
const { nome: n, idade: i} = pessoa
console.log(`nome: ${n}, idade: ${i}`);

/*
Fazendo o mesmo com atributos que não existem no objeto
o retorno é 'undefined'.
Para o caso do atributo 'bemHumorada', foi atribuido o 
valor 'true' como padrão, caso o valor não exista,
que é o caso aqui!
*/
const {sobrenome, bemHumorada = true} = pessoa;
console.log(`sobrenome: ${sobrenome}, bemHumorada: ${bemHumorada}`)

const { endereco: {logradouro, numero, cep}} = pessoa;
console.log(`logradouro: ${logradouro}, numero: ${numero}, cep: ${cep}`);

