import { Component } from "./Component.js"

// Classe Label - Cria elementos label HTML de forma dinâmica
// Herda de Component, reutilizando toda a funcionalidade básica
export class Label extends Component {
  // Construtor recebe: texto do label, elemento pai e opções adicionais
  constructor(text, parent, options){
    // Chama o construtor da classe pai (Component)
    // Automaticamente define a tag como 'label'
    // Object.assign combina as opções com o texto do label
    // O texto é definido através da propriedade textContent
    super('label', parent, Object.assign({}, options, { textContent: text }))
  }
}