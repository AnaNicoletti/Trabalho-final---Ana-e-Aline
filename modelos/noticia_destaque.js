class NoticiaDestaque extends Noticia{
  constructor (imagemDestaque){
super();
    this._imagemDestaque = imagemDestaque;
  }

get mostrar2(){
  try {
    return this.mostrarDestaque();
  } catch (error){
    return error.stack;
  }finally{
    console.log("codigo executado com sucesso");
  }
}

mostrarDestaque(){
  if(_imagemDestaque != ""){
    return `
    <img src="${this._imagemDestaque}"/>
     `;
  }else{
    throw new Errocustomizado("Erro, confira sua imagem e tente novamente");
  }
 }
}