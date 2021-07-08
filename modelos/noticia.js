class Noticia {
  constructor(title, publishedAt, description, author, url) {
    this._title = title;
    this._publishedAt = publishedAt;
    this._author = author;
    this._url = url;
  }


  get mostrar() {
    try {
      return this.mostrarNoticia();
    } catch (error) {
      return error.stack;
    } finally {
      console.log("codigo executado com sucesso");
    }
  }

  mostrarNoticia() {
    if (this._title != "" && this._publishedAt != "" & this._author != "" && this._url != "") {

      return `
      <div class="estilo_noticia1 p-3">
        <h3><a class="linkcolorido" href="${this._url}">${this._title}</a></h3><h6>${this._author}</h6>
        <h5>${this._publishedAt}</h5>
      </div>
      `;
    } else {
      throw new Errocustomizado("Erro, confira suas informações e tente novamente");
    }
  }
}