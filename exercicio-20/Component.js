class Component {
  #refElement

  constructor(){
    this.build()
  }

  getElement(){
    return this.#refElement
  }
  
  setElement(element) {
    this.#refElement = element
  }

  build() {
    this.#refElement = document.createElement('div')
  }

  render() {
    document.body.appendChild(this.#refElement)
  }
}