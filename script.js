let requestURL = "https://modeloatividade.alinesouza1.repl.co/banco_de_dados/noticias.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let mostre = document.getElementById("noticiario");

request.onload = function(){
  let noticias = request.response;

  noticias.forEach(function(noticia) {
       
    let titulo = noticia.titulo;
    let data_da_publicacao = noticia.data_da_publicacao;
    let resumo = noticia.resumo;
    let texto = noticia.texto;


    let not = new Noticia(titulo, data_da_publicacao, resumo, texto);
    
    mostre.insertAdjacentHTML('afterbegin',  not.mostrar);

  })
}