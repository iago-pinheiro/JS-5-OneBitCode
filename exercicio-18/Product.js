class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity){
    this.inStock += quantity
    console.log(`Estoque atual com valor adicionado: ${this.inStock}`)
  }

  calculateDiscount(pctDiscount){
    const discountAmount = this.price * (pctDiscount / 100)
    this.price -= discountAmount
    console.log(`Desconto de ${pctDiscount}% aplicado! Valor com desconto: ${this.price}`)
  }
}

const caderno = new Product('Caderno Tilibra', 'Caderno 10 matérias', 34)
console.log(caderno)
console.log('----------------------------------------------------------------')
caderno.addToStock(50)
console.log('----------------------------------------------------------------')
caderno.calculateDiscount(10)
console.log('----------------------------------------------------------------')
console.log(`Caderno com estoque e desconto aplicado:`)
console.log(caderno)
console.log('----------------------------------------------------------------')

const notebook = new Product('Notebook HP ProBook', 'Notebook HP i9 9900k 32GB RAM', 4699)
console.log(notebook)
console.log('----------------------------------------------------------------')
notebook.addToStock(10)
console.log('----------------------------------------------------------------')
notebook.calculateDiscount(20)
console.log('----------------------------------------------------------------')
console.log(`Notebook com estoque e desconto aplicado: `)
console.log(notebook)