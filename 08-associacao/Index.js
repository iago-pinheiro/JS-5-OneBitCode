const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Frei Roberto Marrom", 1778, "Nova Pedreira", "Patrocínio Paulista", "SP")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.address.fullAddress())