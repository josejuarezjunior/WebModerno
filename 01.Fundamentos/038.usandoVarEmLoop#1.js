//Aula 38 - Usando Var em Loop #01

//Nesse caso a variável i do tipo 'var', existe fora do escopo do bloco 'for'
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log('i =', i);