//Entendendo o Null & Undefined

//Como a constante 'a' é um objeto, ela referencia um endereço na memória onde está esse objeto
console.log('Tipo referência:')
const a = {name: 'Teste'};
console.log(a);

//Logo se 'b' recebe 'a', 'b' está apontando para o mesmo endereço na memória
const b = a;
console.log(b);

//Se for alterado o nome em 'b'
b.name = 'Opa';

//Também será alterado o nome em 'a', pois se trata uma atribuição por referência
console.log(a);

console.log();
console.log('Tipo valor:')
//Quando trabalhamos com tipos primitivos(numbers, strings, etc...), fazemos uma atribuição de valor

let c = 3;
console.log(`Variável c = ${c}`);
let d = c;
console.log(`Variável d = ${d}`);
//Incrementando a variável 'd'
d++;
console.log(`Variável d++ = ${d}`);
//Como é um tipo valor, foi feita apenas uma cópia de 'c' para 'd'. Alterando 'd', o valor não é refletido em 'c'
console.log(`Variável c = ${c}`);


console.log();
console.log('Outros exemplos');
let valor //Não inicializada
//Retorno é 'undefined', pois a variável foi declarada, mas não há valor algum atribuído
console.log(valor);

/*Retorno é um erro'not defined', já que nem ao menos essa variável foi declarada
console.log(valor2)
*/

//null significa ausência de valor. A variável 'valor' existe, mas aponta para lugar nenhum
valor = null;
console.log(valor);

/*
Quando há um tipo referência(um objeto, por exemplo), que tem uma referência e seja necessário deixá-lo vazio/zerado, atribua o valor 'null' para ele!
*/

/*
Irá gerar um erro, pois a propriedade 'toString' não pode ser aplicada à um objeto 'null'.
console.log(valor.toString());
*/

const produto = {};
//Irá retornar 'undefined'
console.log(produto.preco);
//Irá mostrar um objeto vazio
console.log(produto);
produto.preco = 3.50;
console.log(produto);
//Evite atribuir 'undefined'. Deve ser um caso atribuído exclusivamente pela linguagem, nos casos em que se aplica.
produto.preco = undefined;
console.log(produto.preco);

//Irá retornar 'false'
console.log(!!produto.preco);
//Irá retornar o objeto com o atributo preco e o valor undefined.
console.log(produto);

//Para eliminar o atributo, use o 'delete'
delete produto.preco;
//O objeto voltará à ser vazio
console.log(produto);

//Se trata de um produto sem preço mesmo, 0.
produto.preco = null;

//Irá retornar falso, já que o produto não tem preço!
console.log(!!produto.preco);
console.log(produto);
