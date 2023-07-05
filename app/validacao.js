function verificarChuteValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elemChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroPermitido(numero)) {
        elemChute.innerHTML += `<div>Número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btnJogar"><i class="fa-solid fa-rotate-right"></i> Jogar novamente</p>
        `;
    } else if (numero > numeroSecreto) {
        elemChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
        elemChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
});
