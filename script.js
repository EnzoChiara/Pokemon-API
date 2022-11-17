var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    //Bloqueia o refres da pagina
    e.preventDefault()
    //Url da pesquisa
    let urlForm="https://pokeapi.co/api/v2/pokemon/"
    //Valor do input name
    let nome=document.getElementById("name")
    //Concatena a url com o inputname
    urlForm = urlForm + this.name.value
    //Transforma o valor em minusculo
    urlForm = urlForm.toLocaleLowerCase()
    //id Content
    let resposta = document.getElementById('content')
    //id imgPokemon
    let imagem = document.getElementById('imgPokemon')
    //Resposta em html
    let html = ''

    fetch(urlForm)
  
    .then(resposta => resposta.json())
    .then(function(data){
        html='Nome: ' + maiuscula(data.name) + '<br>'
        html = html + 'Tipo: ' + maiuscula(data.types[0].type.name)
        resposta.innerHTML = html

        imagem.innerHTML="<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
    .catch(function(err){
        if(err == "SyntaxError: Unexpected token 'N', 'Not Found' is not valid JSON"){
            html = 'Pokémon não encontrado 😒'
        } else{
            html = 'Pokémon não encontrado 😒'
        }
        resposta.innerHTML = html
    })
    
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}
