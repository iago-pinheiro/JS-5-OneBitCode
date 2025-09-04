Exercício 2: Sistema de Conta Bancária
Enunciado: Crie um sistema simples de contas bancárias:

Classe ContaBancaria (classe pai):

Propriedades: titular, numeroConta, saldo (privado usando #)
Método: depositar(valor) - adiciona valor ao saldo
Método: sacar(valor) - remove valor do saldo (só se tiver saldo suficiente)
Método: consultarSaldo() - retorna o saldo atual
Método: extrato() - retorna informações da conta

Classe ContaPoupanca (herda de ContaBancaria):

Método adicional: renderJuros(taxa) - adiciona juros ao saldo
Sobrescrever extrato() para mostrar "Tipo: Poupança"
Classe ContaCorrente (herda de ContaBancaria):

Propriedade adicional: limite (para cheque especial)
Sobrescrever sacar() para permitir saque até o limite
Sobrescrever extrato() para mostrar "Tipo: Corrente" e o limite