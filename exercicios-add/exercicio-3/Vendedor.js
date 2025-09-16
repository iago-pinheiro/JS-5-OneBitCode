import { Funcionario } from "./Funcionario.js";

export class Vendedor extends Funcionario{
  vendas

  constructor(nome, cargo, salarioBase, vendas = 0){
    super(nome, cargo, salarioBase)
    this.vendas = vendas
  }

  calcularSalario(salario){
    salario = this.getSalarioBase()
    return salario + (this.vendas * 100)
  }

  registrarVenda(num = 1){
    this.vendas += num
    return `${this.vendas} vendas registradas.`
  }
}