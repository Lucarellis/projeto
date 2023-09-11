var jogador = "x";

function jogar(celula){
    // alert("funcionou!")

    if(celula.innerHTML == ""){

        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador = "o";
            celula.style.backgroundColor = "red";

        }else{
            jogador = "x";
            celula.style.backgroundColor = "cadetblue";
        }
    }

}

function reiniciar(){
   window.location.reload();
}

const nomes = ['fulano','ciclano','deltrano','beltrano','Kauan','Gustavo'];
function gerarBatalha(){

    // sorteia um nome da lista, "Math.random vai sortear os itens", "math.floor arredonda o número da lista".

   const nome1 = nomes[ Math.floor( Math.random() * nomes.length ) ];
   const nome2 = nomes[ Math.floor( Math.random() * nomes.length ) ];

    while(nome1 === nome2){
        gerarBatalha();
    }

    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;
}

function adicionar() {
    var nome = document.getElementById("nome").value;
    nomes.push(nome);

    listar();

}

function listar(){
    var listagem = document.getElementById("lista");
    listagem.innerHTML = "";                        //limpa a lista em tela

    for(var i = 0; i < nomes.length; i++){          //percorre os itens da lista

        var item = document.createElement("li");    //cria elemento <li> para o HTML
        var nomeItem = nomes[i];                    //guarda na variável NomeItem o nome especifico da lista
        item.innerHTML = nomeItem;                  //colocar valor dentro do <li>
        listagem.appendChild(item);                 //adiciona o <li> na lista do HTML, dentro do <ul>\a

    }
}