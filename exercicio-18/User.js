class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password){
    if (this.email === email && this.password === password){
      console.log('Login bem sucedido!')
    } else {
      console.log('Login mal sucedido!')
    }
  }
}

const userOne = new User('Iago Pinheiro', 'usuario@email.com', '1234')
console.log(userOne)
userOne.login('usuario@email.com', '1234')

console.log('----------------------------------------------------------------------------')

const userTwo = new User('Robertinho Guimarães', 'email@hotmail.com', '8351')
console.log(userTwo)
userTwo.login('email@gmail.com', '1234')
