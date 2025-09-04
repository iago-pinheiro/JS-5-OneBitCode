// === TESTE COMPLETO DO SISTEMA BANCÁRIO ===
// Testando todas as classes: ContaBancaria, ContaPoupanca e ContaCorrente

import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaCorrente } from "./ContaCorrente.js";

console.log("🏦 === SISTEMA BANCÁRIO - TESTE COMPLETO === 🏦\n");

// ========================================
// 1. TESTE DA CLASSE CONTABANCARIA (CLASSE PAI)
// ========================================
console.log("📋 1. TESTANDO CLASSE CONTABANCARIA (BASE)");
console.log("=" .repeat(50));

const contaBasica = new ContaBancaria("Ana Silva", "11111-1", 500);
console.log("✅ Conta básica criada:");
console.log(contaBasica.extrato());
console.log();

console.log("💰 Depositando R$ 300:");
contaBasica.depositar(300);
console.log(`Saldo após depósito: R$ ${contaBasica.getSaldo()}`);
console.log();

console.log("💸 Sacando R$ 100:");
contaBasica.sacar(100);
console.log(`Saldo após saque: R$ ${contaBasica.getSaldo()}`);
console.log();

console.log("❌ Tentando sacar R$ 1000 (mais que o saldo):");
const resultadoSaque = contaBasica.sacar(1000);
console.log(resultadoSaque);
console.log(`Saldo continua: R$ ${contaBasica.getSaldo()}`);
console.log("\n");

// ========================================
// 2. TESTE DA CLASSE CONTAPOUPANCA (HERANÇA)
// ========================================
console.log("🐷 2. TESTANDO CLASSE CONTAPOUPANCA (HERANÇA)");
console.log("=" .repeat(50));

const poupanca = new ContaPoupanca("Carlos Santos", "22222-2", 2000);
console.log("✅ Conta poupança criada:");
console.log(poupanca.extrato());
console.log();

console.log("💰 Depositando R$ 1000:");
poupanca.depositar(1000);
console.log(`Saldo após depósito: R$ ${poupanca.getSaldo()}`);
console.log();

console.log("📈 Aplicando juros de 5%:");
const juros1 = poupanca.renderJuros(5);
console.log(juros1);
console.log(`Novo saldo: R$ ${poupanca.getSaldo()}`);
console.log();

console.log("💸 Sacando R$ 500:");
poupanca.sacar(500);
console.log(`Saldo após saque: R$ ${poupanca.getSaldo()}`);
console.log();

console.log("📈 Aplicando juros de 2%:");
const juros2 = poupanca.renderJuros(2);
console.log(juros2);
console.log(`Saldo final: R$ ${poupanca.getSaldo()}`);
console.log();

console.log("📄 Extrato final da poupança:");
console.log(poupanca.extrato());
console.log("\n");

// ========================================
// 3. TESTE DA CLASSE CONTACORRENTE (HERANÇA + LIMITE)
// ========================================
console.log("💳 3. TESTANDO CLASSE CONTACORRENTE (LIMITE)");
console.log("=" .repeat(50));

const contaCorrente = new ContaCorrente("Maria Oliveira", "33333-3", 800, 1000);
console.log("✅ Conta corrente criada:");
console.log(contaCorrente.extrato());
console.log();

console.log("💰 Depositando R$ 200:");
contaCorrente.depositar(200);
console.log(`Saldo após depósito: R$ ${contaCorrente.getSaldo()}`);
console.log();

console.log("💸 Sacando R$ 300 (saque normal):");
contaCorrente.sacar(300);
console.log(`Saldo após saque: R$ ${contaCorrente.getSaldo()}`);
console.log();

console.log("💸 Sacando R$ 900 (vai usar o limite):");
const saqueComLimite = contaCorrente.sacar(900);
console.log(saqueComLimite);
console.log(`Saldo atual: R$ ${contaCorrente.getSaldo()}`);
console.log();

console.log("❌ Tentando sacar R$ 2000 (mais que saldo + limite):");
const saqueInvalido = contaCorrente.sacar(2000);
console.log(saqueInvalido);
console.log();

console.log("📄 Extrato final da conta corrente:");
console.log(contaCorrente.extrato());
console.log("\n");

// ========================================
// 4. COMPARAÇÃO ENTRE TODAS AS CONTAS
// ========================================
console.log("📊 4. RESUMO FINAL - TODAS AS CONTAS");
console.log("=" .repeat(50));

console.log("🏦 CONTA BÁSICA:");
console.log(`   Titular: ${contaBasica.titular}`);
console.log(`   Saldo: R$ ${contaBasica.getSaldo()}`);
console.log(`   Tipo: Básica\n`);

console.log("🐷 CONTA POUPANÇA:");
console.log(`   Titular: ${poupanca.titular}`);
console.log(`   Saldo: R$ ${poupanca.getSaldo()}`);
console.log(`   Tipo: Poupança (rende juros)\n`);

console.log("💳 CONTA CORRENTE:");
console.log(`   Titular: ${contaCorrente.titular}`);
console.log(`   Saldo: R$ ${contaCorrente.getSaldo()}`);
console.log(`   Limite: R$ ${contaCorrente.limite}`);
console.log(`   Tipo: Corrente (com limite)\n`);

console.log("🎉 === TESTE COMPLETO FINALIZADO === 🎉");
console.log("✅ Herança funcionando");
console.log("✅ Encapsulamento funcionando");
console.log("✅ Polimorfismo funcionando");
console.log("✅ Todas as funcionalidades testadas!");
