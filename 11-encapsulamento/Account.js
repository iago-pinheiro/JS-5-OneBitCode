//? ENCAPSULAMENTO: conceito de "esconder" dados sensíveis dentro da classe
// Isso protege informações importantes de serem acessadas diretamente
class Account {
  //* O símbolo # torna esses atributos PRIVADOS
  // Isso significa que só podem ser acessados DENTRO da própria classe
  // É como ter um cofre: só quem tem a chave (métodos da classe) pode abrir
  #password   // senha fica protegida - ninguém de fora pode ver
  #balance = 0 // saldo também fica protegido - só a classe pode mexer
  
  constructor(user) {
    // email fica público (sem #) - pode ser acessado de fora
    this.email = user.email
    // senha vai para o atributo privado - fica protegida
    this.#password = user.password
  }

  //* MÉTODO PÚBLICO: qualquer um pode chamar este método
  //? Mas ele só vai funcionar se a pessoa se autenticar corretamente
  getBalance(email, password){
    // Chama o método privado para verificar se a pessoa é realmente dona da conta
    if (this.#authenticate(email, password)){
      // Se passou na verificação, mostra o saldo
      return this.#balance
    } else {
      // Se não passou, não mostra nada (retorna null)
      return null
    }
  }

  //* MÉTODO PRIVADO: só pode ser usado DENTRO da classe
  //? É como uma função secreta que só a própria classe conhece
  #authenticate(email, password){
    // Verifica se o email e senha batem com os dados salvos
    return this.email === email && this.#password === password
  }
}

const user = {
  email: "iago@email.com",
  password: "123456"
}

// Criando uma nova conta usando os dados do usuário
const myAccount = new Account(user)

//* TESTANDO O ENCAPSULAMENTO:
console.log(myAccount)
// Vai mostrar o objeto, mas repare que a senha e saldo não aparecem diretamente
// Isso é o encapsulamento funcionando!

console.log(myAccount.getBalance("iago@email.com", "123456"))
// Vai retornar o saldo (0) porque a autenticação passou

// console.log(myAccount.#password) // ERRO! Não consegue acessar
//console.log(myAccount.#balance)  // ERRO! Não consegue acessar
// Isso prova que o encapsulamento está funcionando - os dados estão protegidos!