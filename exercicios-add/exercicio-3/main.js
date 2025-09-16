import { Vendedor } from "./Vendedor.js"
import { Funcionario } from "./Funcionario.js"
import { Gerente } from "./Gerente.js" 

const vendedor = new Vendedor("Ana", "Vendedora", 2000)
vendedor.registrarVenda(1)
vendedor.registrarVenda(1)
vendedor.registrarVenda(1)

const gerente = new Gerente("Carlos", "Gerente", 5000, 1000)

console.log(vendedor.apresentar("Ana", "Vendedora", 2000))
console.log(`Salário: R$ ${vendedor.calcularSalario()}`) // 2000 + (3 * 100) = 2300

console.log(gerente.apresentar("Carlos", "Gerente", 5000))
console.log(`Salário: R$ ${gerente.calcularSalario()}`) // 5000 + 1000 = 6000