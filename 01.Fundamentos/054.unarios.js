//Aula 54 - Operadores: Unários

let num1 = 1;
let num2 = 2;

num1++;//Forma pré-fixada(prefixed)
console.log(num1);
--num1;//Forma pós-fixada(postfixed)
console.log(num1);

/*
O resultado abaixo é verdadeiro, pois:
valor incial de num1 = 1
valor inicial de num2 = 2

O incremento de 'num1' ocorre antes
da comparação, sendo assim, valerá 2.
O decremento de 'num2' ocorre depois do
momento da comparação, sendo assim, valerá
2. Somente após essa comparação, é que o
decremento será efetuado, valendo 1.
*/
console.log(++num1 === num2--);
//Nesse momento as variáveis possuem valor diferente!
console.log(num1 === num2);
