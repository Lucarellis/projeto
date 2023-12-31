class Livro {
    //class livro
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

//classe gerenciamento, responsável por gerenciar os elementos em tela
class Gerenciamento {
    constructor(){
        this.livros = [];       //lista de livros
        this.formulario = document.getElementById('formulario');
        this.listagem = document.getElementById('listagem');

        //monitorar o submit(click do botão) do formulario - chama função adicionar
        this.formulario.addEventListener('submit', this.adicionar.bind(this));
    }
    adicionar(event){
        event.preventDefault();
        var titulo = document.getElementById('titulo').value;           //pega valor titulo
        var autor = document.getElementById('autor').value;             //pega valor autor

        var livro = new Livro(titulo, autor);        //criando objeto livro
        this.livros.push(livro);              //adiciona objeto livro na lista livros;
        this.exibirTela();
        titulo.value = '';      //limpar campo titulo
        autor.value = '';       //limpar campo autor
    }
    exibirTela(){
        this.listagem.innerHTML = '';       //limpa lista
        for(var i=0; i < this.livros.length; i++){        //percorrer toda lista de livros
            var livro = this.livros[i];
            var li = document.createElement('li');
            li.textContent = livro.titulo + ' por ' + livro.autor;
            this.listagem.appendChild(li);

        }
    }
}
var gerencia = new Gerenciamento();     //instanciando um novo objeto gerenciamento