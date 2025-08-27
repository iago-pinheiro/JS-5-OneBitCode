const Author = require('./Author')

//* Vamos testar o sistema do blog!

//* Criando alguns autores
const joao = new Author("João Silva")
const maria = new Author("Maria Santos")

//* João cria alguns posts
const post1 = joao.createPost("JavaScript é incrível", "Hoje aprendi sobre classes em JS...")
const post2 = joao.createPost("Dicas de programação", "Algumas dicas importantes para iniciantes...")

//* Maria também cria um post
const post3 = maria.createPost("Minha jornada no desenvolvimento", "Começei a programar há 6 meses e...")

//* Pessoas comentando nos posts
post1.addComment("Muito bom o post!", "Ana")
post1.addComment("Aprendi muito, obrigado!", "Carlos")
post1.addComment("Excelente explicação!", "Beatriz")

post2.addComment("Essas dicas são ouro!", "Pedro")

post3.addComment("Parabéns pela evolução!", "João Silva")
post3.addComment("Continue assim!", "Lucas")

//* Vamos ver os resultados
console.log("=== AUTOR JOÃO ===")
console.log(`Nome: ${joao.name}`)
console.log(`Quantidade de posts: ${joao.postList.length}`)

console.log("\n=== POSTS DO JOÃO ===")
joao.postList.forEach((post, index) => {
  console.log(`\nPost ${index + 1}:`)
  console.log(`Título: ${post.title}`)
  console.log(`Autor: ${post.author}`)
  console.log(`Comentários: ${post.commentsList.length}`)
})

console.log("\n=== COMENTÁRIOS DO PRIMEIRO POST ===")
post1.commentsList.forEach((comment, index) => {
  console.log(`${index + 1}. "${comment.comment}" - ${comment.author}`)
})