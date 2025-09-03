// Criando os elementos
const meuLabel = new Label('Nome completo:')
const meuInput = new Input()
const outroLabel = new Label('Email:')
const outroInput = new Input()

// Criando o formulário
const meuForm = new Form()

// Adicionando elementos no form
meuForm.addChild(meuLabel)
meuForm.addChild(meuInput)
meuForm.addChild(outroLabel)
meuForm.addChild(outroInput)

// Colocando tudo na página
meuForm.render()

// Testando se conseguimos acessar os elementos
console.log('Form criado:', meuForm.getElement())
console.log('Input criado:', meuInput.getElement())
console.log('Label criado:', meuLabel.getElement())