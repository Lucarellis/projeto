async function buscarClima(){
    var cidade = document.getElementById("cidade").value
    var chave = 'dac2c79639950fee12976d07149a9587';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';

    try{
        var resposta = await fetch(url);
        var dado = await resposta.json();

        var resultado = document.getElementById("resultado")
        resultado.innerHTML =
        '<h2><u> Previsão de Tempo Para '+ dado.name +' </u></h2>'
        +'<p> Temperatura: ' + dado.main.temp + ' C° </p> '
        +'<p> Temperatura Máxima: '+ dado.main.temp_max +' C° </p> ' 
        +'<p> Temperatura Mínima: '+ dado.main.temp_min +' C° </p> '
        +'<p> Temperatura Ambiente: '+ dado.main.feels_like +' C° </p> '
        +'<p> Umidade: '+ dado.main.humidity +' % '
        +'<p> Velocidade do Vento: '+ dado.wind.speed +' Km/h </p> '
        +'<p> Nuvens: '+ dado.clouds.all +' % </p> '
        +'<p> Condição: '+dado.weather[0].description+'</p>'
        + '<img class="imgTempo" src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">'

    }catch(error){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Erro ao procurar o clima: "+error+"</p>";
    }
}