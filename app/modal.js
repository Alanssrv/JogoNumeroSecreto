document.querySelector('#btn-tema').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-mode');
});

var btnComoJogar = document.getElementById('btn-sobre');
var modalComoJogar = document.getElementById('modal-como-jogar');
var spanComoJogar = document.getElementsByClassName('close')[0];

btnComoJogar.addEventListener('click', () => {
    modalComoJogar.style.display = 'block';
});

spanComoJogar.addEventListener('click', () => {
    modalComoJogar.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modalComoJogar) {
        modalComoJogar.style.display = "none";
    }
});

var btnConfigurar = document.getElementById('btn-config');
var modalConfigurar = document.getElementById('modal-configurar');
var spanConfigurar = document.getElementsByClassName('close')[1];
var btnConfirmar = document.querySelector('.modal-limites--confirmar');

const configValorMinimo = document.getElementById('limite-minimo');
const configValorMaximo = document.getElementById('limite-maximo');

btnConfigurar.addEventListener('click', () => {
    configValorMinimo.value = menorValor;
    configValorMaximo.value = maiorValor;
    modalConfigurar.style.display = 'block';
});

spanConfigurar.addEventListener('click', () => {
    modalConfigurar.style.display = "none";
});

btnConfirmar.addEventListener('click', () => {
    atualizarValores(configValorMinimo.value, configValorMaximo.value);
    modalConfigurar.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modalConfigurar) {
        modalConfigurar.style.display = "none";
    }
});

configValorMinimo.addEventListener('change', () => {
    if (configValorMinimo.value < 1)
        configValorMinimo.value = 1;

    if (configValorMaximo.value - configValorMinimo.value < 10) {
        configValorMaximo.value = parseInt(configValorMinimo.value) + 10;
    }
});

configValorMaximo.addEventListener('change', () => {
    if (configValorMaximo.value < 11)
        configValorMaximo.value = 11;

    if (configValorMinimo.value > 1) {
        if (configValorMaximo.value - configValorMinimo.value < 10) {
            configValorMinimo.value = parseInt(configValorMaximo.value) - 10;
        }
    }
});