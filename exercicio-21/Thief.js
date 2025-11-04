const Character = require('./Character')

class Thief extends Character {
  constructor(nome, ptsVida, ataque, defesa) {
    super(nome, ptsVida, ataque, defesa)
  }

  atacar(alvo){
    const dano = 2 * (this.ataque - alvo.defesa)
    if (dano > 0) {
      alvo.ptsVida -= dano
      console.log(`${this.nome} atacou pelas costas ${alvo.nome} e causou ${dano} de dano crítico!`)
    } else {
      console.log(`${this.nome} atacou ${alvo.nome} mas não causou dano!`)
    }
  }
}

module.exports = Thief