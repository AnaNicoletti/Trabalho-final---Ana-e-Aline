class NoticiaDestaque extends Noticia {
  constructor(imagemDestaque, title, publishedAt, description, author, url) {
    super(title, publishedAt, description, author, url);
    this._imagemDestaque = imagemDestaque;
    this._publishedAt = publishedAt;
    this._author = author
    this._description = description
  }

  get mostrar2() {
    try {
      return this.mostrarDestaque();
    } catch (error) {
      return error.stack;
    } finally {
      console.log("codigo executado com sucesso");
    }
  }

  mostrarDestaque() {
    if (this._imagemDestaque != "" && this._title != "" && this._publishedAt != "" && this._author != ""&&  this._description != "" && this._url != "") {
      return `
      <aside>
      <div class="estilo_noticia2 p-3">
      <img src="${this._imagemDestaque}"/>
      <h2><a class="linkcolorido" href="${this._url}">${this._title}</a></h2>
      <div>${this._publishedAt}</div>
      <div>${this._author}</div>
      <div>${this._description}</div><br>
      </div>
      </aside>
     `;
    } else {
      throw new Errocustomizado("Erro, confira sua imagem e tente novamente");
    }
  }
}