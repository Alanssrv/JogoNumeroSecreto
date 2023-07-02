const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor);
}

const elemMenorValor = document.getElementById('menor-valor');
elemMenorValor.innerHTML = menorValor;

const elemMaiorValor = document.getElementById('maior-valor');
elemMaiorValor.innerHTML = maiorValor;