class Thief extends Character {
  constructor(nome, ptsVida, ataque, defesa) {
    super(nome, ptsVida, ataque, defesa)
  }

  atacar(alvo){
    alvo = new Character
    alvo.ptsVida -= 2 * (this.Character.ataque - Character.defesa)
  }
}