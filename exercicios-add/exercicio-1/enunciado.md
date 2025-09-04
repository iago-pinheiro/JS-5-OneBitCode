Exercício 1: Sistema de Animais
Enunciado: Crie um sistema simples de animais com as seguintes classes:

Classe Animal (classe pai):

Propriedades: nome, idade, especie
Método: apresentar() que retorna "Olá, eu sou [nome], tenho [idade] anos e sou um(a) [especie]"
Método: dormir() que retorna "[nome] está dormindo... 😴"
Classe Cachorro (herda de Animal):

Método adicional: latir() que retorna "Au au! 🐕"
Sobrescrever o método apresentar() para adicionar "Sou muito fiel!" no final

Classe Gato (herda de Animal):

Método adicional: miar() que retorna "Miau! 🐱"
Sobrescrever o método apresentar() para adicionar "Sou independente!" no final


Teste:


const dog = new Cachorro("Rex", 3, "Labrador")
const cat = new Gato("Mimi", 2, "Siamês")

console.log(dog.apresentar())
console.log(dog.latir())
console.log(cat.apresentar())
console.log(cat.miar())