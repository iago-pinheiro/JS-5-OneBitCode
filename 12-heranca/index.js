// 1. CLASSE PAI (SUPERCLASSE) - A base de tudo
class Property {
  constructor(area, price){
    this.area = area      
    this.price = price    
  }

  getPricePerSquareMeter(){
    return this.price / this.area
  }
}

// 2. HERANÇA SIMPLES - Apenas herdando tudo da classe pai
// "extends" = significa que House é filha de Property
class House extends Property{ 
  // Não tem constructor próprio, então usa o da classe pai
  // Herda todos os métodos e propriedades de Property
}

const land = new Property(200, 50000)        
const someHouse = new House(120, 200000)     

console.log(land)
console.log(someHouse)
// instanceof verifica se um objeto é instância de uma classe
console.log(someHouse instanceof Property)   // true - porque House herda de Property

// 4. HERANÇA COM CONSTRUCTOR PERSONALIZADO
class Apartment extends Property {
  constructor(number, area, price){
    // SUPER() - chama o constructor da classe pai
    // É OBRIGATÓRIO chamar super() antes de usar 'this'
    super(area, price)    // Passa area e price para Property
    this.number = number  // Adiciona uma propriedade nova do apartamento
  }

  getFloor(){
    return this.number.slice(0, -2)
  }
}

// 5. TESTANDO A HERANÇA COMPLETA
const apt = new Apartment("201", 100, 160000)
console.log(apt)
// O apartamento tem:
// - area e price (herdados de Property)
// - number (próprio da classe Apartment)
// - getPricePerSquareMeter() (herdado de Property)
// - getFloor() (próprio da classe Apartment)

/*
* RESUMO DA HERANÇA:
- extends = "herda de"
- super() = chama o constructor da classe pai
- Classe filha herda TUDO da classe pai (propriedades e métodos)
- Pode adicionar suas próprias propriedades e métodos
- instanceof verifica se um objeto é de uma determinada classe
*/