export class Component {
  // Campo privado para armazenar o elemento HTML criado
  #element = null

  // Construtor recebe: tag HTML, elemento pai e opções do elemento
  constructor(tag, parent, options) {
    this.tag = tag          // Tipo de tag HTML (ex: 'div', 'input', 'button')
    this.parent = parent    // Elemento pai onde será inserido
    this.options = options  // Propriedades do elemento (id, class, textContent, etc.)
    this.build()           // Chama automaticamente o método build
  }

  // Método público para acessar o elemento HTML criado
  getElement(){
    return this.#element
  }

  // Método que cria o elemento HTML e aplica as opções
  build(){
    // Cria o elemento HTML com a tag especificada
    this.#element = document.createElement(this.tag)
    
    // Aplica todas as propriedades do objeto options ao elemento
    // Ex: {id: 'meuId', className: 'minhaClasse', textContent: 'Texto'}
    Object.assign(this.#element, this.options)
    
    // Retorna a própria instância (this) para permitir encadeamento de métodos
    // Method chaining = chamar vários métodos em sequência: obj.metodo1().metodo2().metodo3()
    // Exemplo: new Component('div', 'body', {}).build().render()
    return this
  }

  // Método que adiciona o elemento ao DOM
  render(){
    // Verifica se o pai é uma instância de Component
    if (this.parent instanceof Component) {
      // Se for Component, pega o elemento HTML do pai e adiciona este elemento
      this.parent.getElement().append(this.#element)
    } else {
      // Se for string (seletor CSS), busca o elemento no DOM e adiciona
      document.querySelector(this.parent).append(this.#element)
    }
  }
}