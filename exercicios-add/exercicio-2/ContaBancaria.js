// Classe ContaBancaria (classe pai):

// Propriedades: titular, numeroConta, saldo (privado usando #)
// Método: depositar(valor) - adiciona valor ao saldo
// Método: sacar(valor) - remove valor do saldo (só se tiver saldo suficiente)
// Método: consultarSaldo() - retorna o saldo atual
// Método: extrato() - retorna informações da conta

export class ContaBancaria {
  titular
  numeroConta
  #saldo

  constructor(titular, numeroConta, saldoInicial = 0){
    this.titular = titular
    this.numeroConta = numeroConta
    this.#saldo = saldoInicial
  }
  
  getSaldo(){
    return this.#saldo
  }

  depositar(valor){
    this.#saldo += valor
  }

  sacar(valor){
    if (valor > this.getSaldo()) {
      return `Saldo insuficiente para saque! Saldo continua com o mesmo valor.` 
    } else{
      this.#saldo -= valor
    }
  }

  consultarSaldo(){
    return `O saldo atual da conta é R$${getSaldo()}`
  }

  extrato(){
    return `Extrato: \nTitular da conta: ${this.titular}\nNúmero da conta: ${this.numeroConta}\nSaldo: R$${this.getSaldo()}`
  }
}

