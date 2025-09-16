// Classe Carro (herda de Veiculo):

import { Veiculo } from "./Veiculo.js";

// Propriedade adicional: portas (número de portas)
// Sobrescrever acelerar(): consome 1 litro e retorna "Vruum! 🚗"
// Sobrescrever info() para incluir número de portas

export class Carro extends Veiculo {
  constructor(marca, modelo, ano, portas) { 
    super(marca, modelo, ano) 
    this.portas = portas
  }

  acelerar(){
    if (this.getCombustivel() < 1){
      return 'Não é possível acelerar - Sem combustível'
    }
    this.setCombustivel(this.getCombustivel() - 1)
    return `Vruum! 🚗 - Consumido 1 litro de combustível\nCombustível atual: ${this.getCombustivel()} litros`
  }

  info() {
    return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCombustível atual: ${this.getCombustivel()} litros\nNúmero de portas: ${this.portas}`
  }
}