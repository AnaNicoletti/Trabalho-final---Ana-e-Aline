class Errocustomizado extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "Noticia_Error";
  }
}