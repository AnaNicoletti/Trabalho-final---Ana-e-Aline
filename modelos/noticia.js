class Noticia{
  constructor (title, publishedAt, description, author, url){
    this._title = title;
    this._publishedAt = publishedAt;
    this._description = description;
    this._author = author;
    this._url = url;
  }

  get mostrar(){
    try {
      return this.mostrarNoticia();
    } catch (error){
      return error.stack;
    }finally{
      console.log("codigo executado com sucesso");
    }
  }

  mostrarNoticia(){
    if (this._title != "" && this._publishedAt != "" && this._description != "" && this._author != "" && this._author != "" && this._url != ""){
    
      return`
      <h3><a href="${this._url}">${this._title}</a></h3>
      <div>${this._publishedAt}</div>
      <div>${this._description}</div><br>
      <div>${this._author}</div>
      `;

    }else{
      throw new Errocustomizado("Erro, confira suas informações e tente novamente");
    }
  }
  }


