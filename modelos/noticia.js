class Noticia{
  constructor (titulo, data_da_publicacao, resumo, texto){
    this._titulo = titulo
    this._data_da_publicacao = data_da_publicacao
    this._resumo = resumo
    this._texto = texto
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
    if (this._titulo != "" && this._data_de_publicacao != "" && this._texto != ""){
    
      return`
      <h3>${this._titulo}</h3>
      <div>${this._data_da_publicacao}</div>
      <div>${this._resumo}</div><br>
      <div>${this._texto}</div>
      `;

    }else{
      throw new Errocustomizado("Erro, confira suas informações e tente novamente");
    }
  }
  }


