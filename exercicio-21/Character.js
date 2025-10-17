class Character {
  constructor(nome, ptsVida, ataque, defesa) {
    this.nome = nome
    this.ptsVida = ptsVida
    this.ataque = ataque
    this.defesa = defesa
  }

  atacar(alvo) {
    alvo = new Character
    alvo.ptsVida -= this.Character.ataque - Character.defesa
  }
}