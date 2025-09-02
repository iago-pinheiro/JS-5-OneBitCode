// Uma classe específica para elementos form, que deve ser uma subclasse da classe Component e possuir um método para adicionar elementos como filhos (através das instâncias das classes Component e suas subclasses).

class Form extends Component{
  constructor(){
    super()
    this.childList = []
  }

  build(){
    const createForm = document.createElement('form')
    this.setElement(createForm)
  }

  addChild(component){
    this.childList.push(component)
    this.getElement().appendChild(component.getElement())
  }
}