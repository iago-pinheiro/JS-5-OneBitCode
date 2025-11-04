const Character = require('./Character')

class Mage extends Character {
  constructor(nome, ptsVida, ataque, defesa, ptsMagia) {
    super(nome, ptsVida, ataque, defesa)
    this.ptsMagia = ptsMagia
  }

  atacar(alvo) {
    const dano = (this.ataque + this.ptsMagia) - alvo.defesa
    if (dano > 0) {
      alvo.ptsVida -= dano
      console.log(`${this.nome} lançou um feitiço em ${alvo.nome} e causou ${dano} de dano mágico!`)
    } else {
      console.log(`${this.nome} lançou um feitiço em ${alvo.nome} mas não causou dano!`)
    }
  }

  aumentarPontosDeVida(alvo) {
    const cura = 2 * this.ptsMagia
    alvo.ptsVida += cura
    console.log(`${this.nome} curou ${alvo.nome} em ${cura} pontos de vida!`)
  }
}

module.exports = Mage