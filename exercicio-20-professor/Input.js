import { Component } from "./Component.js";

// Classe Input - Cria elementos input HTML de forma dinâmica
// Herda de Component, reutilizando toda a funcionalidade básica
export class Input extends Component {
  // Construtor simplificado - só precisa do pai e opções
  constructor(parent, options){
    // Chama o construtor da classe pai (Component)
    // Automaticamente define a tag como 'input'
    // parent = onde o input será inserido
    // options = propriedades do input (type, placeholder, value, etc.)
    super('input', parent, options)
  }
}