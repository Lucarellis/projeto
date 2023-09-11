function somar() {
    // pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    // converte de texto para números
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // pega a div que vai exibir o resultado
    var total = document.getElementById("resultado");   
    // escreve nessa div o resultado num1+num2
    total.innerHTML = num1 + num2;
    verificarVazio()
}

function subtrair() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("resultado");
    total.innerHTML = num1 - num2;
}

function multiplicar() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("resultado");
    total.innerHTML = num1 * num2;
}

function dividir() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("resultado");
    total.innerHTML = num1 / num2;
}

function limpar() {

    var total = document.getElementById("resultado");
    total.innerHTML = " ";
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}