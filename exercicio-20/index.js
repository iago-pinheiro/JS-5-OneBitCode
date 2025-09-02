// Teste das classes POO para manipulação do DOM

console.log('🚀 Iniciando teste das classes...')

// Criando os elementos
console.log('📝 Criando Label...')
const meuLabel = new Label('Nome completo:')

console.log('📱 Criando Input...')
const meuInput = new Input()

console.log('📝 Criando outro Label...')
const outroLabel = new Label('Email:')

console.log('📱 Criando outro Input...')
const outroInput = new Input()

// Criando o formulário
console.log('📋 Criando Form...')
const meuForm = new Form()

// Adicionando elementos no form
console.log('🔗 Adicionando elementos no formulário...')
meuForm.addChild(meuLabel)
meuForm.addChild(meuInput)
meuForm.addChild(outroLabel)
meuForm.addChild(outroInput)

// Colocando tudo na página
console.log('🎨 Renderizando na página...')
meuForm.render()

// Testando se conseguimos acessar os elementos
console.log('✅ Teste concluído!')
console.log('Form criado:', meuForm.getElement())
console.log('Input criado:', meuInput.getElement())
console.log('Label criado:', meuLabel.getElement())

console.log('🎉 Tudo funcionando! Verifique o formulário na página.')