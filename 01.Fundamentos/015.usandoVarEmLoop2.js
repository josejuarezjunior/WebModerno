//Usando Var em Loop #02

var funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//Ambas chamadas abaixo, irão retornar o valor 10
funcs[2]();
funcs[8]();