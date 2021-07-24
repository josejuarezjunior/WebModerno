//Usando Let em Loop #02

var funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//Usando o tipo 'let' os índices serão respeitados, direrente da variável de tipo 'var'.
funcs[2]();
funcs[8]();