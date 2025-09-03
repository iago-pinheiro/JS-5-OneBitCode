import { Component } from "./Component.js";

// Classe Form - Cria elementos form HTML de forma dinâmica
// Herda de Component, reutilizando toda a funcionalidade básica
export class Form extends Component {
  // Construtor simplificado - só precisa do pai e opções
  constructor(parent, options){
    // Chama o construtor da classe pai (Component)
    // Automaticamente define a tag como 'form'
    // parent = onde o form será inserido
    // options = propriedades do form (action, method, class, etc.)
    super('form', parent, options)
  }

  // Método especial para adicionar múltiplos filhos ao form
  // Usa rest parameter (...children) para aceitar quantos filhos quiser
  addChildren(...children) {
    // Para cada filho passado como parâmetro
    children.forEach(child => {
      // Pega o elemento HTML do form atual e adiciona o elemento HTML do filho
      // child.getElement() retorna o elemento HTML do componente filho
      this.getElement().appendChild(child.getElement())
    })
  }
}