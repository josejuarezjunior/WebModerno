//Aula 53 - Operadores: Lógicos

/*
Tabela verdade

v = verdadeiro
f = falso

Operador and(e):
v and v -> v
v and f -> f
f and v -> f
f and f -> f

Operador or(ou):
v or v = v
v or f = v
f or v = v
f or f = f

Operador xor(ou exclusivo) os dois operandos devem ser diferentes:

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

Operador de Negação !:

!v -> f
!f -> v

O operador de negação é unário, ou seja, age sobre apenas
um operando. Os demais operandos apresentados, são operadores
binários, já que agem sobre dois operandos
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const compraTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;//Simulando um xor(ou exclusivo)
    const manterSaudavel = !comprarSorvete;//Operador unário
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
    /*
    O 'return abaixo reforça o que foi feito acima,
    onde foram omitidas as declarações(chave: valor)
    return {
        comprarSorvete: comprarSorvete,
        comprarTv50: comprarTv50,
        comprarTv32: comprarTv32,
        manterSaudavel: manterSaudavel
    }
    */
}
console.log('true, true',compras(true, true));
console.log('true, false',compras(true, false));
console.log('false, true',compras(false, true));
console.log('false, false',compras(false, false));