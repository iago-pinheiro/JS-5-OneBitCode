const Character = require('./Character')
const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

console.log('=== TESTE DE COMBATE RPG ===\n')

// Criando personagens
const warrior = new Warrior('Conan', 150, 25, 15, 10)
const mage = new Mage('Gandalf', 80, 15, 8, 20)
const thief = new Thief('Robin Hood', 100, 20, 10)
const enemy = new Character('Goblin', 50, 10, 5)

console.log('📊 STATUS INICIAL:')
console.log(`${warrior.nome}: ${warrior.ptsVida} HP | Ataque: ${warrior.ataque} | Defesa: ${warrior.defesa} | Escudo: ${warrior.escudo}`)
console.log(`${mage.nome}: ${mage.ptsVida} HP | Ataque: ${mage.ataque} | Defesa: ${mage.defesa} | Magia: ${mage.ptsMagia}`)
console.log(`${thief.nome}: ${thief.ptsVida} HP | Ataque: ${thief.ataque} | Defesa: ${thief.defesa}`)
console.log(`${enemy.nome}: ${enemy.ptsVida} HP | Ataque: ${enemy.ataque} | Defesa: ${enemy.defesa}`)

console.log('\n--- ROUND 1: WARRIOR ---')
console.log(`Posição atual: ${warrior.posicao}`)
warrior.atacar(enemy)
console.log(`${enemy.nome} HP: ${enemy.ptsVida}`)

console.log('\n--- ROUND 2: WARRIOR EM DEFESA ---')
warrior.mudarPosicao()
warrior.atacar(enemy) // Não deve atacar
console.log(`Defesa total do ${warrior.nome}: ${warrior.defesaTotal}`)

console.log('\n--- ROUND 3: WARRIOR VOLTA PARA ATAQUE ---')
warrior.mudarPosicao()
warrior.atacar(enemy)
console.log(`${enemy.nome} HP: ${enemy.ptsVida}`)

console.log('\n--- ROUND 4: MAGE ATACA ---')
mage.atacar(enemy)
console.log(`${enemy.nome} HP: ${enemy.ptsVida}`)

console.log('\n--- ROUND 5: MAGE CURA O GOBLIN ---')
console.log(`${enemy.nome} HP antes da cura: ${enemy.ptsVida}`)
mage.aumentarPontosDeVida(enemy)
console.log(`${enemy.nome} HP depois da cura: ${enemy.ptsVida}`)

console.log('\n--- ROUND 6: THIEF ATACA (DANO DUPLO) ---')
thief.atacar(enemy)
console.log(`${enemy.nome} HP: ${enemy.ptsVida}`)

console.log('\n📊 STATUS FINAL:')
console.log(`${warrior.nome}: ${warrior.ptsVida} HP`)
console.log(`${mage.nome}: ${mage.ptsVida} HP`)
console.log(`${thief.nome}: ${thief.ptsVida} HP`)
console.log(`${enemy.nome}: ${enemy.ptsVida} HP`)

console.log('\n--- TESTE: GOBLIN ATACA DE VOLTA ---')
enemy.atacar(warrior)
console.log(`${warrior.nome} HP: ${warrior.ptsVida}`)
