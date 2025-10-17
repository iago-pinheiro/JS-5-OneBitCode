class Mage extends Character {
  constructor(nome, ptsVida, ataque, defesa, ptsMagia) {
    super(nome, ptsVida, ataque, defesa)
    this.ptsMagia = ptsMagia
  }

  atacar(alvo) {
    alvo = new Character
    alvo.ptsVida -= (this.Character.ataque + this.Character.ptsMagia) - Character.defesa
  }

  aumentarPontosDeVida(alvo) {
    alvo = new Character
    alvo.ptsVida += 2 * this.Character.ptsMagia
  }
}