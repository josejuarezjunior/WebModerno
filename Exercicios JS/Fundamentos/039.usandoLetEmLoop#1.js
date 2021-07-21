//Aula 39 - Usando Let em Loop #01

//Nesse caso a variável i do tipo 'let', não existe fora do escopo do bloc 'for'.
for(let i = 0; i < 10; i++){
    console.log(i);
}
//Retornará um erro!
console.log('i =', i);