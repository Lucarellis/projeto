//SEM ORIENTAÇÃO A OBJETOS
var nome1 = 'Paulo';
var nome2 = 'Juliana';
var nome3 = 'Alan';

var idade1 = '28';
var idade2 = '30';
var idade3 = '22';

function falar(nome, idade){
    alert('Sem Orientação a Objetos: Olá, sou '+ nome +' e tenho ' + idade +' anos ');
}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);

//COM ORIENTAÇÃO A OBJETOS
//Classe
class Pessoa{                           //classe
    constructor(nome, idade){           //construtor, quem construir o objeto, onde você passa os parametros (dados)
        this.nome = nome;               //atributo nome
        this.idade = idade;             //atributo idade
    }
    falar(){                            //método para falar
        alert("Pessoa criada: Olá, meu nome é " +this.nome+ " e tenho " +this.idade+ " anos ");
    }
}

//Instanciando Objeto - Criar Objeto
var pessoa1 = new Pessoa('Nelson', 53);   //objeto pessoa1
var pessoa2 = new Pessoa('Roberta', 45);  //objeto pessoa2
var pessoa3 = new Pessoa('Júlia', 17);    //objeto pessoa3

pessoa1.falar();
pessoa2.falar();
alert('Olá ' + pessoa3.nome);


//HERANÇA E POLIMORFISMO
//criando classe Pai
class Animal {
    constructor(nome){
        this.nome = nome;
    }
    fazerBarulho(){
        alert("Fazendo Barulho Genérico");
    }
}


//Criando clases filhas de animal
class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
    fazerBarulho(){
        alert("Cachorro Latindo!");
    }
}

class Gato extends Animal {
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
    fazerBarulho(){
        alert("Gato Miando!");
    }
}

var objetoCachorro = new Cachorro('Fred', 'Schnauzer');
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho();      //latindo

var objetoGato = new Gato('Sininho', 'Cinza');
objetoGato.nome = " Garfield ";     //Alterando atributos públicos
objetoGato.cor = "Laranja";         //Alterando atributos públicos
alert(objetoGato.nome);
alert(objetoGato.cor);
objetoGato.fazerBarulho();          //miando

//Encapsulamento, modificador de acesso
class contaBancaria{
    constructor(saldo){
        this._saldo = saldo;        //"_" significa privado
    }
    get obterSaldo(){
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
    }
    sacar(valor){
        if(valor <= this._saldo){
            this._saldo = this._saldo - valor;
        } else {
            alert("Valor Maior Que o Saldo.");
        }
    }
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(100);
alert(minhaConta.obterSaldo);
minhaConta.sacar(10000);
alert(minhaConta.obterSaldo);