function buscar(){
    var entrada = document.getElementById("entrada").value.toLowerCase();

    if(entrada.length < 1){
        entrada = contador;
    }

    var url ="https://pokeapi.co/api/v2/pokemon/"+entrada;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        
    var tela = document.getElementById("tela");
    tela.innerHTML = 
    ' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '
    +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" > '
    +'<h2>'+ data.name +'</h2>'
    +' <p> Id: '+ data.id +'</p> '
    +' <p> Tipo: '+ data.types.map(type => type.type.name).join(", ") +'</p>'
    +' <p> Habilidades: ' + data.abilities.map(ability => ability.ability.name)

    contador = data.id;                                             //atualiza o contador para o id do pokemon
    document.getElementById("entrada").value="";                   //limpa o input

    }).catch(error => {

        var tela = document.getElementById("tela");
        tela.innerHTML = '<p> Pokémon não encontrado! </p>';
    })

}


var contador=0;

    function proximo(){
    contador = contador + 1;
    buscar();

}

    function anterior(){
    contador = contador - 1;
    buscar();
    }
