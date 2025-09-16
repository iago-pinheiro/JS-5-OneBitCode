import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
  bonus

  constructor(nome, cargo, salarioBase, bonus = 0 ){
    super(nome, cargo, salarioBase)
    this.bonus = bonus
  }

  calcularSalario(salario){
    salario = this.getSalarioBase()
    return salario + this.bonus
  }

  definirBonus(valor){
    this.bonus += valor
    return `Bonus de R$${this.valor} adicionado.`
  }
}