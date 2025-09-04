// Classe Cachorro (herda de Animal):

// Método adicional: latir() que retorna "Au au! 🐕"
// Sobrescrever o método apresentar() para adicionar "Sou muito fiel!" no final

import { Animal } from "./Animal.js"

export class Cachorro extends Animal {
  constructor(nome, idade, especie){
    super(nome, idade, especie)
  }

  latir(){
    return "Au au! 🐕"
  }

  apresentar(){
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e sou um(a) ${this.especie}. Sou muito fiel!`
  }
}