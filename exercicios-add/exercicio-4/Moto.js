// Classe Moto (herda de Veiculo):

import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo{
  constructor(marca, modelo, ano, cilindrada){
    super(marca, modelo, ano)
    this.cilindrada = cilindrada
  }

  acelerar(){
    if (this.getCombustivel() < 0.5){
      return 'Não é possível acelerar - Sem combustível'
    }
    this.setCombustivel(this.getCombustivel() - 0.5)
    return `Vruum vruum! 🏍️ - Consumido 0.5 litro de combustível\nCombustível atual: ${this.getCombustivel()} litros`
  }

  info() {
    return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCombustível atual: ${this.getCombustivel()} litros\nCilindradas: ${this.cilindrada}cc`
  }
}