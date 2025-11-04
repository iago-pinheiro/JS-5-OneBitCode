const Character = require('./Character')

// Uma classe Warrior que representa outro tipo de personagem e também herda de Character.Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).

// Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.

// Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.

// Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).

class Warrior extends Character {
  constructor(nome, ptsVida, ataque, defesa, escudo) {
    super(nome, ptsVida, ataque, defesa)
    this.escudo = escudo
    this.posicao = 'ataque' 
  } 

  mudarPosicao() {
    if(this.posicao === 'ataque') {
      this.posicao = 'defesa'
      console.log(`${this.nome} mudou para posição de defesa!`)
    } else {
      this.posicao = 'ataque'
      console.log(`${this.nome} mudou para posição de ataque!`)
    }
  }

  atacar(alvo) {
    if (this.posicao === 'ataque') {
      
      const dano = this.ataque - alvo.defesa
      
      
      if (dano > 0) {
        alvo.ptsVida -= dano
        console.log(`${this.nome} atacou ${alvo.nome} e causou ${dano} de dano!`)
      } else {
        console.log(`${this.nome} atacou ${alvo.nome} mas não causou dano!`)
      }
    } else {
      console.log(`${this.nome} está em posição de defesa e não pode atacar!`)
    }
  }

  get defesaTotal() {
    if (this.posicao === 'defesa') {
      return this.defesa + this.escudo
    }
    return this.defesa
  }
}

module.exports = Warrior