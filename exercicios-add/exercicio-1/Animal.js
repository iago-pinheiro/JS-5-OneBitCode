// Propriedades: nome, idade, especie
// Método: apresentar() que retorna "Olá, eu sou [nome], tenho [idade] anos e sou um(a) [especie]"
// Método: dormir() que retorna "[nome] está dormindo... 

export class Animal {
  constructor(nome, idade, especie){
    this.nome = nome
    this.idade = idade
    this.especie = especie
  }

  apresentar(){
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e sou um(a) ${this.especie}`
  }

  dormir(){
    return `${this.nome} está dormindo...`
  }
}