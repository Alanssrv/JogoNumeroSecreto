const menorValor = 1800;
const maiorValor = 1900;
const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor);
}

console.log(numeroSecreto);

const elemMenorValor = document.getElementById('menor-valor');
elemMenorValor.innerHTML = menorValor;

const elemMaiorValor = document.getElementById('maior-valor');
elemMaiorValor.innerHTML = maiorValor;