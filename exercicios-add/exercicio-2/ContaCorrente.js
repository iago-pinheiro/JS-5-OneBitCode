// Classe ContaCorrente (herda de ContaBancaria):

// Propriedade adicional: limite (para cheque especial)
// Sobrescrever sacar() para permitir saque até o limite
// Sobrescrever extrato() para mostrar "Tipo: Corrente" e o limite

import { ContaBancaria } from "./ContaBancaria.js";

export class ContaCorrente extends ContaBancaria {
  constructor(titular, numeroConta, saldoInicial = 0, limite = 0){
    super(titular, numeroConta, saldoInicial)
    this.limite = limite
  }

  sacar(valor){ 
    const saldoDisponivel = this.getSaldo() + this.limite

    if (valor > saldoDisponivel) {
      return `Saldo insuficiente para saque! Limite disponível: R$${saldoDisponivel}` 
    } else{
      const novoSaldo = this.getSaldo() - valor
      if (novoSaldo >= 0){
        super.sacar(valor)
      } else {
        const saldoAtual = this.getSaldo()
        super.sacar(saldoAtual) 
        return `Saque realizado usando limite. Valor usado do limite: R$${valor - saldoAtual}`
      }
    }
  }

  extrato(){
    return `Extrato: \nTitular da conta: ${this.titular}\nNúmero da conta: ${this.numeroConta}\nSaldo: R$${this.getSaldo()}\nLimite disponível: R$${this.limite}\nTipo conta: Corrente.`
  }
}