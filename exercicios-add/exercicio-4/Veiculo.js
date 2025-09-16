// Classe Veiculo (classe pai):

// Propriedades: marca, modelo, ano, #combustivel (privado)
// Método: abastecer(litros) - adiciona combustível
// Método: consultarCombustivel() - retorna combustível atual
// Método: acelerar() - consome 1 litro (se tiver combustível)
// Método: info() - retorna informações do veículo

export class Veiculo{
  marca
  modelo
  ano
  #combustivel

  constructor(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.#combustivel = 0
  }

  getCombustivel(){
    return this.#combustivel
  }

  setCombustivel(combustivel){
    this.#combustivel = combustivel
  }

  abastecer(litros){
    this.setCombustivel(this.getCombustivel() + litros)
    return `Foram colocados ${litros} litros e agora o veículo está com ${this.getCombustivel()} litros no tanque.`
  }

  consultarCombustivel(){
    return `Combustível atual: ${this.getCombustivel()}` 
  }

  acelerar(){
    if (this.getCombustivel() <= 1){
      return 'Não é possível acelerar - Sem combustível'
    }
    this.setCombustivel(this.getCombustivel() - 1)
    return `Acelerando!!! Foi consumido 1 litro de combustível\nCombustível atual: ${this.getCombustivel()} litros`
  }

  info() {
    return `Marca do veículo: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCombústivel atual: ${this.getCombustivel()}`
  }
}