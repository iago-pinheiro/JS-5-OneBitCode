export class Component {
  #refElement = null

  constructor(tag, parent, options){
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  getElement(){
    return this.#refElement
  }
  
  setElement(element) {
    this.#refElement = element
  }

  build() {
    this.#refElement = document.createElement(this.tag)
    Object.assign(this.#refElement, this.options)
    return this
  }

  render() {
    document.body.appendChild(this.#refElement)
  }
}