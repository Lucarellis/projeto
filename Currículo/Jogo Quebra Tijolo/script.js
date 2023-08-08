//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d"); 

//configurar raquete 
var raqueteAltura = 10;         //10
var raqueteLargura = 70;       //70
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 10;         //7

//configurar a bola
var bolaRadius = 10;            //10                tamanho da bola
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 6;                   //direção de bola em X (esquerda/direita)     bolaDX = 2      melhor: 8
var bolaDY = -7;                  //direção de bola em y  (acima / abaixo)      bolaDY = -2     melhor: -8

//configurar tijolos
var tijolosPorLinha = 5;        //3        melhor=5
var tijolosPorColuna = 8;       //6        melhor=8
var tijoloLargura = 60;     //75
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = [];       //lista com os tijolos

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;       // 10 = pontuação
var pontuacao = 0;

function facil(){
     raqueteLargura = 90;       //90
     tijolosPorLinha = 2;       //2
     tijolosPorColuna = 6;      //5
     tijoloLargura = 82;        //90
     tijoloAltura = 35;         //40
     bolaRadius = 18;           //20
     bolaDX = 3;                //2
     bolaDY = -3;               //-1

     totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10; 
     pontuacao = 0;
     bolaX = canvas.width / 2;
     bolaY = canvas.height - 30;
     iniciarTijolos();
}

function medio(){
    raqueteLargura = 75;       
     tijolosPorLinha = 4;       
     tijolosPorColuna = 7;      
     tijoloLargura = 68;        
     tijoloAltura = 20;         
     bolaRadius = 15;           
     bolaDX = 4;                
     bolaDY = -4;               

     totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10; 
     pontuacao = 0;
     bolaX = canvas.width / 2;
     bolaY = canvas.height - 30;
     iniciarTijolos();
}

function dificil(){
    raqueteLargura = 65;       
     tijolosPorLinha = 5;       
     tijolosPorColuna = 8;      
     tijoloLargura = 60;        
     tijoloAltura = 20;         
     bolaRadius = 10;           
     bolaDX = 6;                
     bolaDY = -6;               

     totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10; 
     pontuacao = 0;
     bolaX = canvas.width / 2;
     bolaY = canvas.height - 30;
     iniciarTijolos();
}

function impossivel(){
    raqueteLargura = 55;       
     tijolosPorLinha = 8;       
     tijolosPorColuna = 10;      
     tijoloLargura = 45;        
     tijoloAltura = 15;         
     bolaRadius = 10;           
     bolaDX = 8;                
     bolaDY = -9;               

     totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10; 
     pontuacao = 0;
     bolaX = canvas.width / 2;
     bolaY = canvas.height - 30;
     iniciarTijolos();
}

function iniciarTijolos(){
    //dedicado apenas a inicialização dos tijolos
    for(var coluna=0; coluna< tijolosPorColuna; coluna++ ){
        tijolos[coluna] = []    //0 1 2 3 4 5

        for(var linha=0; linha < tijolosPorLinha; linha++){

            tijolos[coluna][linha] = {x: 5, y: 5, ativo: 1 }

            //x é a posição esquerda/direita no canva
            //y é a posição acima/abaixo no canva
            //ativo, determina se o tijolo aparece ou não, 1 ou 0
        }
    }
}
iniciarTijolos();

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
                    gerarEfeitoSonoro('moeda.mp3');     //som

                    if(pontuacao === totalPontuacao){
                        vitoria();
                    }
                }
            }
        }
    }
}

contador = 0;

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
    bolaDX = 0;
    bolaDY = 0;

    if(contador < 1){
        gerarEfeitoSonoro('gameover.mp3');      //som
    }
    contador = contador +1;
}

function reiniciar(){
    document.location.reload();

    contador = 0;
}


//exibir na tela a mensagem de vitória
function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    bolaDX = 0;
    bolaDY = 0;

    gerarEfeitoSonoro('youwin.mp3');     //som
}

function gerarEfeitoSonoro(som){

    //cria contexto do audio
    var contexto = new (window.AudioContext)();
    //fazer uma requisição para carregar o arquivo de som
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET', som,true);
    requisicao.responseType = 'arraybuffer';   //armazenar na memoria

    requisicao.onload = function(){
        //decodificar o arquivo de som
        contexto.decodeAudioData(requisicao.response, function(buffer){ 
            //reprodução do som
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            //conectar a saida de som
            fonte.connect(contexto.destination);
            fonte.start(0);     //executa som
        });
    }
    requisicao.send();
}


function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    //analisar colisao eixo x, colisao canto direito/esquerdo       |       lateral
    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = -bolaDX;       //inverte direcao direita/esquerda
        gerarEfeitoSonoro('lateraluhh.mp3');         
    }

    //analisa colisao com parte de cima
    if(bolaY + bolaDY < bolaRadius){
        bolaDY = -bolaDY;       //inverte colisao ao bater em cima
    } else if(bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura){
            //se for maior que o comeco da raquete e menor que o final da raquete
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){
            bolaDY = -bolaDY;             //inverte direção  
            gerarEfeitoSonoro('raqueteclique.mp3');

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

desenhar(); //chama função desenha