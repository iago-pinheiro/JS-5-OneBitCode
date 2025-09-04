// Classe Gato (herda de Animal):

// Método adicional: miar() que retorna "Miau! 🐱"
// Sobrescrever o método apresentar() para adicionar "Sou independente!" no final
import { Animal } from "./Animal.js";

export class Gato extends Animal{
  constructor(nome, idade, especie){
    super(nome, idade, especie)
  }

  miar() {
    return "Miau! 🐱"
  }

  apresentar(){
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e sou um(a) ${this.especie}. Sou independente!`
  }
}