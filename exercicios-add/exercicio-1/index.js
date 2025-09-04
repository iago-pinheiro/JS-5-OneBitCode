import { Animal } from "./Animal.js";
import { Cachorro } from "./Cachorro.js"
import { Gato } from "./Gato.js"

const dog = new Cachorro("Rex", 3, "Labrador")
const cat = new Gato("Mimi", 2, "Siamês")

console.log(dog.apresentar())
console.log(dog.latir())
console.log(cat.apresentar())
console.log(cat.miar())