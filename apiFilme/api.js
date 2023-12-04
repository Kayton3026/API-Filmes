console.log("estou aqui");
const apikey = 'c8be2b0c'
const Pesquisa = document.querySelector("form"); //seleciona o elemento no DOM

Pesquisa.onsubmit = function (ev) { //funçao que sera chamada quando clicar no botão pesquisa que 
    ev.preventDefault(); // deixa de executador o evento padrao 
    const pesquisa = ev.target.pesquisa.value  //armazena o valor que estiver no input 

    if (pesquisa == "") {// verificar se foi digitado algo 
        alert('Campo Vazio!!')
        return; //nao ira proseguir se o campo for vazio  
    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)// consumir a url
        .then(result => result.json())// Promises 
        .then(json => listaFilme(json))// Promises 


}
const listaFilme = (json) => { //criando função para mostrar a lista de filmes 
    const lista = document.querySelector("div.lista"); // selecionando a div 
    lista.innerHTML = ""; //limpa todo o conteudo 

    if(json.Response == 'False'){
        alert('Filme não Encontrado');
        return;
    }

    json.Search.forEach(element => { //percorre os conteudo dentro de Search

        let item = document.createElement("div");//criando elemento na variavel item
        item.classList.add("item");
        item.innerHTML = `<img src="${element.Poster}"/><h3>${element.Title}</h3>`;

        lista.appendChild(item);
    });
}