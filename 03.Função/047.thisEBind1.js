const pessoa = {
    //'saudacao' é um atributo dentro do objeto 'pessoa'!
    saudacao: 'Bom dia!',
    /**
     * Dentro do objeto 'pessoa' temos uma função
     * que chama o atributo 'saudacao' deste objeto (this).
     */
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

/**
 * No caso abaixo foi atribuída à uma constante
 * a função 'falar' do objeto pessoa.
 * Nesse caso somente a função foi extraída
 * do objeto 'pessoa'. Esse objeto não veio junto.
 * Dessa forma a função 'falar' não tem objeto
 * para invocar o atributo 'saudacao'.
 */
const falar = pessoa.falar;
//Conflito entre paradigmas: funcional e OO
falar();

//Mode de contornar esse conflito

/**
 * O 'bind' amarra um objeto na função.
 * O 'this' se refere ao objeto como
 * argumento no'bind'.
 */
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();