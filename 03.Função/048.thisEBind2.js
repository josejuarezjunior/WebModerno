//Utilizando o 'bind'

function Pessoa () {
    this.idade = 0;
    
    /**
     * 'setInterval()' dispara uma função à 
     * partir de umintervalo informado.
     */
    setInterval(function() {//Função anônima
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000) //1000 é o intervalo em que essa função será disparada(em milissegundos!)
}

new Pessoa;

//Atribuindo o this à uma constante para referenciar

function Pessoa2 () {
    this.idade = 0;

    //Essa constante abaixo referencia esse objeto.
    const self = this;

    /**
     * 'setInterval()' dispara uma função à 
     * partir de um intervalo informado.
     */
    setInterval(function() {//Função anônima
        self.idade++;
        console.log(self.idade);
    }, 1000) //1000 é o intervalo em que essa função será disparada(em milissegundos!)
}

new Pessoa2;