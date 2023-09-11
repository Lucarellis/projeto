var frase = "Mãe, obrigado por me ensinar a ser essa pessoa que sou hoje. Se sou feliz assim, é por sua causa que fez o impossível para que nunca me faltasse nada! Feliz Dia das Mães.";

function gerarFrase(){
    var texto = document.getElementById("frase");
    texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}