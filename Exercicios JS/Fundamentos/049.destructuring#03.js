//Aula 49 -  Operadores: Destructuring #03


/*
O valor entre chaves se trata de um destructuring
e não de um objeto.
*/
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};
console.log(rand(obj));

/*
Informando apenas um parâmetro. Nesse caso
será gerado um número entre 955 e 1000, já
que o padrão do parâmetro 'max' é 1000.
*/
console.log(rand({ min: 955}));
console.log(rand({}));
//console.log(rand()); //Irá gerar erro!
