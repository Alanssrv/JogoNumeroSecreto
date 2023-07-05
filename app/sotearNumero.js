var menorValor = 1;
var maiorValor = 1000;
var numeroSecreto;

const elemMenorValor = document.getElementById('menor-valor');
const elemMaiorValor = document.getElementById('maior-valor');

atualizarValores(menorValor, maiorValor);

function gerarNumeroSecreto() {
    return parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor);
}

function atualizarValores(menorValor, maiorValor) {
    this.menorValor = menorValor;
    this.maiorValor = maiorValor;
    elemMenorValor.innerHTML = menorValor;
    elemMaiorValor.innerHTML = maiorValor;

    numeroSecreto = gerarNumeroSecreto();
}
