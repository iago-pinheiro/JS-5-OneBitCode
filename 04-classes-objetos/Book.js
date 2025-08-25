class Book {
  //* Construtor - método especial executado quando criamos um objeto
  constructor(title) {
    this.title = title         //* Propriedade título
    this.published = false     //* Todo livro começa não publicado
  }

  //* Método da classe - função que todos os objetos terão
  publish() {
    this.published = true      //* Muda o status para publicado
  }
}

//* Criando instâncias (objetos) da classe Book
const eragon = new Book("Eragon") //* Instância da classe book
const eldest = new Book("Eldest") //* Outra instância independente

//* Chamando o método publish() apenas no eragon
eragon.publish()

//* Verificando os objetos criados
console.log(eragon)  
console.log(eldest)

//* instanceof verifica se o objeto foi criado por uma classe específica
console.log(eragon instanceof Book)  //* true - eragon é uma instância de Book