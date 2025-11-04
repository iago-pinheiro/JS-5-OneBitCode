class Character {
  constructor(nome, ptsVida, ataque, defesa) {
    this.nome = nome
    this.ptsVida = ptsVida
    this.ataque = ataque
    this.defesa = defesa
  }

  atacar(alvo) {
    const dano = this.ataque - alvo.defesa
    if (dano > 0) {
      alvo.ptsVida -= dano
      console.log(`${this.nome} atacou ${alvo.nome} e causou ${dano} de dano!`)
    } else {
      console.log(`${this.nome} atacou ${alvo.nome} mas não causou dano!`)
    }
  }
}

module.exports = Character