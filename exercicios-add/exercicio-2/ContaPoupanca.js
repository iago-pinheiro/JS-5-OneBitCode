// Classe ContaPoupanca (herda de ContaBancaria):

// Método adicional: renderJuros(taxa) - adiciona juros ao saldo
// Sobrescrever extrato() para mostrar "Tipo: Poupança"

import { ContaBancaria } from "./ContaBancaria.js"

export class ContaPoupanca extends ContaBancaria {
  constructor(titular, numeroConta, saldoInicial = 0){
    super(titular, numeroConta, saldoInicial)
  }

  renderJuros(taxa){
    const saldoAtual = this.getSaldo()
    const juros = saldoAtual * (taxa / 100)
    this.depositar(juros)
    return `Juros de ${taxa}% aplicados. Valor do juros: R$${juros.toFixed(2)}`
  }
  
  extrato(){
    return `Extrato: \nTitular da conta: ${this.titular}\nNúmero da conta: ${this.numeroConta}\nSaldo: R$${this.getSaldo()}\nTipo conta: Poupança.`
  }
}