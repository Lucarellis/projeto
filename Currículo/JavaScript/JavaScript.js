// alert('Olá Mundo'); <-- (Ctrl + ;)

var numero = 25;

if(numero > 10){
    alert('numero maior que 10');
}else if(numero < 0){
    // alert('numero inválido');
}else{
    // alert('menor que 10');
}

var contador = 0;

// enquanto contador for menor que 5 executa
while(contador < 5){
    alert('numero: '+ contador);
    contador = contador + 1;
}

// Criação de lista - Fulano 0, Ciclano 1, Deltrano 2
var nomes = ['Fulano', 'Ciclano', 'Deltrano'];
// alert(nomes[0]);

// nomes.length = 3
for(contador=0; contador < nomes.length; contador++){
    alert(nomes[contador]);

    if(nomes[contador] === 'Ciclano'){
        alert('Pessoa Encontrada!')
    }

}

// Função

function baixarEstoque(){
    alert("Baixou Estoque!");
}

function movimentarCaixa(){
    alert("Caixa movimentado");
}

function fazerVenda(){
baixarEstoque();
movimentarCaixa();

    // DOM -
    var titulo = document.getElementById('titulo');
    titulo.innerHTML = "novo texto"
}

// objeto
var pessoa = { idade:10, nome: 'Ricardo', altura: 1.50};
alert(pessoa.nome);
