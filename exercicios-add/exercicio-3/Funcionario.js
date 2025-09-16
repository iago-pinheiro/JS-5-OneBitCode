export class Funcionario {
  nome
  cargo
  #salarioBase

  constructor(nome, cargo, salarioBase){
    this.nome = nome
    this.cargo = cargo
    this.#salarioBase = salarioBase
  }

  getSalarioBase(){
    return this.#salarioBase
  }

  apresentar(nome, cargo, salarioBase){
    return `Nome do funcionário: ${nome}\nCargo: ${cargo}\n{Salário base do funcionario: ${salarioBase}}`
  }

  consultarSalario(){
    return `Salário base do funcionário: ${this.getSalarioBase()}`
  }

  calcularSalario(salario){
    salario = this.#salarioBase
    return salario
  }
}