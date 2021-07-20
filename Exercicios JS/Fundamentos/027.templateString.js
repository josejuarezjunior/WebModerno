//Aula 27 - Usando Template Strings

const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
//O template String, que é delimitado por sinal de crase(backtick)(``), considera espaços, quebras de linha e tabs. Também faz a interpolação, que é a substituição pelo valor da variável, dentro do texto.
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);
 //Expressões
 console.log(`1 + 1 = ${1 + 1}`);
 const up = texto => texto.toUpperCase();
 console.log(`Ei...${up('cuidado')}`);