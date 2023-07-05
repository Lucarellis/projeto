//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d"); 

//configurar raquete 
var raqueteAltura = 10;         //10
var raqueteLargura = 75;       //70
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 10;         //7

//configurar a bola
var bolaRadius = 10;            //10
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 5;                   //direção de bola em X (esquerda/direita)     bolaDX = 2      melhor: 8
var bolaDY = -5;                  //direção de bola em y  (acima / abaixo)      bolaDY = -2     melhor: -8

//configurar tijolos
var tijolosPorLinha = 5;        //3
var tijolosPorColuna = 8;       //6
var tijoloLargura = 60;     //75
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = [];       //lista com os tijolos

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;       // 10 = pontuação
var pontuacao = 0;

//dedicado apenas a inicialização dos tijolos
for(var coluna=0; coluna< tijolosPorColuna; coluna++ ){
    tijolos[coluna] = []    //0 1 2 3 4 5

    for(var linha=0; linha < tijolosPorLinha; linha++){

        tijolos[coluna][linha] = {x:0, y:0, ativo:1 }

        //x é a posição esquerda/direita no canva
        //y é a posição acima/abaixo no canva
        //ativo, determina se o tijolo aparece ou não, 1 ou 0
    }
}


var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete - detecta descer e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    //se o valor = "direita" ||ou valor = "setaDireita"
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = true; //ativa variavel setaDireita
    
    //se o valor = "esquerda" ||ou valor = "setaEsquerda"
    }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
        setaEsquerda = true; //ativa variavel setaEsquerda
    }
}

function subirDaTecla(tecla){
    //se o valor = "direita" ||ou valor = "setaDireita"
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = false; //ativa variavel setaDireita
    
    //se o valor = "esquerda" ||ou valor = "setaEsquerda"
    }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
        setaEsquerda = false; //ativa variavel setaEsquerda
    }
}


function desenharRaquete(){
    desenho.beginPath();       //inicia desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "rgb(65, 1, 108)";      //roxo
    desenho.fill();
    desenho.closePath();
}


function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "rgb(246, 128, 65)";        //laranja
    desenho.fill();
    desenho.closePath();
}

function desenharTijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){

            if(tijolos[coluna][linha].ativo == 1){      //verifica se tijolo está ativo para desenha-lo

                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento)+ espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento)+ espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura)
                desenho.fillStyle = "rgb(0, 113, 113)";     //verde agua
                desenho.fill();
                desenho.closePath();
            }

        }
    }
}

function detectarColisao(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){

            var tijolo = tijolos[coluna][linha];
            if(tijolo.ativo === 1){

                if(bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    && bolaY + bolaRadius > tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijoloAltura){
                    bolaDY = -bolaDY;
                    tijolo.ativo = 0;  
                    tela = document.getElementById("ponto");  
                    pontuacao = pontuacao + 10;
                    tela.innerHTML = "Score: "+ pontuacao;

                    if(pontuacao === totalPontuacao){
                        window.location.reload();
                    }
                }
            }
        }
    }
}

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
}

function reiniciar(){
    document.location.reload();
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    //analisar colisao eixo x, colisao canto direito/esquerdo
    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = -bolaDX;       //inverte direcao direita/esquerda
    }

    //analisa colisao com parte de cima
    if(bolaY + bolaDY < bolaRadius){
        bolaDY = -bolaDY;       //inverte colisao ao bater em cima
    } else if(bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura){
            //se for maior que o comeco da raquete e menor que o final da raquete
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;             //inverte direção  

        }else{
            gameover();     //puxa gameover
        }

    }

    //se seta Direita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete;    //anda para direita
    
    //se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas"
    } else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;    //anda para esquerda
    }

    bolaX = bolaX + bolaDX;         //faz a bola andar para direita/esquerda
    bolaY = bolaY + bolaDY;         //faz a bola andar para cima/baixo

    
    requestAnimationFrame(desenhar) //atualizar tela de forma suave
}

desenhar(); //chama função desenhar