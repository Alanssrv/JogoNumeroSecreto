const elemChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificarChuteValido(chute);
}

function exibeChute(chute) {
    elemChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());