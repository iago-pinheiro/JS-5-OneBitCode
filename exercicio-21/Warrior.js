class Warrior extends Character {
  constructor(nome, ptsVida, ataque, defesa, escudo, posicao) {
    super(nome, ptsVida, ataque, defesa)
    this.escudo = escudo
    this.posicao = posicao
  } 

  mudarPosicao(posicao) {
    if(posicao == defesa) {
      this.posicao = defesa
    } else {
      this.posicao = ataque
    }
  }

  atacar(alvo) {
    if (Character == Warrior && this.posicao == ataque) {
      alvo = new Character
      alvo.ptsVida -= this.Character.ataque - Character.defesa
    } else {
      while(this.posicao == defesa) {
        
      }
      return 'Em modo de defesa. Impossível atacar'
    }
  }
}