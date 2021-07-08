let requestURL = "https://www.luizpicolo.com.br/api.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let amost = document.getElementById("amostra");
let mostre = document.getElementById("noticiario");

request.onload = function(){
  let noticias = request.response.articles;

  let amostra = new NoticiaDestaque(noticias[0].urlToImage, noticias[0].title, noticias[0].publishedAt, noticias[0].description, noticias[0].author, noticias[0].url );

  amost.insertAdjacentHTML('afterbegin', amostra.mostrar2);

  noticias.forEach(function(noticia) {
       
    let title = noticia.title;
    let publishedAt = noticia.publishedAt;
    let description = noticia.description;
    let author = noticia.author;
    let url = noticia.url;

    let not = new Noticia(title, publishedAt, description, author, url);
    
    mostre.insertAdjacentHTML('afterbegin',  not.mostrar);

  })
}