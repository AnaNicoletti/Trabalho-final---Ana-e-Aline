let requestURL = "https://www.luizpicolo.com.br/api.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let mostre = document.getElementById("noticiario");

request.onload = function(){
  let noticias = request.response;

  noticias.forEach(function(noticia) {
       
    let title = noticia.title;
    let publishedAt = noticia.publishedAt;
    let description = noticia.description;
    let author = noticia.author;

    let not = new Noticia(title, publishedAt, description, author);
    
    mostre.insertAdjacentHTML('afterbegin',  not.mostrar);

  })
}