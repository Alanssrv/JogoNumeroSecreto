const elemChute = document.getElementById('chute');

console.log(elemChute);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const chute = e.results[0][0].transcript;
    exibeChute(chute);
}

function exibeChute(chute) {
    elemChute.classList.remove('hidden');
    elemChute.children[1].innerHTML = chute;
}