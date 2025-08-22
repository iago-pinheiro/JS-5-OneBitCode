//* POO - PROGRAMAÇÃO ORIENTADA A OBJETOS EM JAVASCRIPT

//* Conceitos básicos:
//* OBJETO: Estrutura que agrupa dados (propriedades) e ações (métodos)
//* CLASSE/FUNÇÃO CONSTRUTORA: Modelo para criar objetos
//* INSTÂNCIA: Objeto criado a partir de uma classe
//* PROPRIEDADE: Dados do objeto (ex: title, pages)
//* MÉTODO: Função que pertence ao objeto (ex: addOnStock)
//* THIS: Palavra-chave que se refere ao objeto atual

//* OBJETOS LITERAIS - Forma mais simples de criar objetos
//* Cada objeto é único e criado individualmente
// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Christopher Paolini"
//   }, 
//   addOnStock(quantity) {
//     this.inStock += quantity
//   }
// }

//* FUNÇÃO CONSTRUTORA - Modelo para criar objetos similares
//* Nas Funções Construtoras sempre em PascalCase
// Usar PascalCase em funções construtoras
function Book (title, pages, tags, author) {
  //* 'this' se refere ao novo objeto que está sendo criado
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false    //* Valor padrão para todos os livros
  this.inStock = 0         //* Valor padrão para todos os livros
  
  //* MÉTODO - Função que pertence ao objeto
  this.addOnStock = function addOnStock(quantity){
    this.inStock += quantity
  }
  
  this.save = function () {
  //* salva no banco de dados
  }
}

//* Criando dados que serão reutilizados
const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure"]

//* INSTÂNCIA - Criando objetos usando a função construtora
//* A palavra 'new' cria um novo objeto e chama a função Book
const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)

//* Criando outro objeto (outra instância) da mesma classe
const eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)