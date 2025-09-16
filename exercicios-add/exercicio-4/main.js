import { Moto } from "./Moto.js"
import { Carro } from "./Carro.js"
import { Veiculo } from "./Veiculo.js"

const carro = new Carro("Toyota", "Corolla", 2020, 4)
const moto = new Moto("Honda", "CB600", 2019, 600)

carro.abastecer(50)
moto.abastecer(20)

console.log(carro.info())
console.log(carro.acelerar())

console.log(moto.info())
console.log(moto.acelerar())