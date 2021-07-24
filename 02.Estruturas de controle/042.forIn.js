//Usando a Estrutura FOR/IN

 const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

 //O 'for in' retorna índice e não o elemento em si
 for(let i in notas){
     console.log(`Nota ${i} = ${notas[i]}`);
 }

 console.log('-----------');

 const pessoa = {
     nome: 'Ana',
     sobrenome: 'Silva',
     idade: 29,
     peso: 64
 }

 for(let atributo in pessoa){
     console.log(`${atributo} = ${pessoa[atributo]}`);
 }