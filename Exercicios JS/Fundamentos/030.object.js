//Aula 30 - Tipos em JavaScript: Array

/*
JavaScript é uma linguagem multiparadigma. É possível programar nos paradigmas Procedural, Orientado à Objeto, Funcional...
*/

/*Em JavaScript, objeto é um par de chave(Nome do atributo) e valor. Pode ser criado de forma dinâmica, ou seja, criando novos elementos à qualquer instante*/

//Criação de um objeto vazio
const prod1 = {};
//Criando uma atributo e já atribuindo valor
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
//Essa notação permite nome de chave com espaço.
prod1['Desconto Legal'] = 0.40;//Evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2);