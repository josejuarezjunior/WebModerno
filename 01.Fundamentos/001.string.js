//Tipos em JavaScript: String

const escola = "Cod3r";

console.log("A String é " + escola);
console.log("O caractere no índice 4 é " + escola.charAt(4));
console.log("O código ASCII(Unicode), referente ao caractere do índice 3 é " + escola.charCodeAt(3));
console.log("O índice do caractere 'd' é " + escola.indexOf('d'));

//Substrings
console.log("A substring à partir do índice '1' é " + escola.substring(1));
console.log("A substring de caractere '1' até '3' é " + escola.substring(0,3));

//Concatenação
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");

//Replace
console.log(escola.replace(3, 'e'));

//Split
console.log('Ana, Maria, Pedro'.split(','));

