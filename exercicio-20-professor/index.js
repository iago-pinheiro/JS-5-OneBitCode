import { Component } from "./Component.js";
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js";

const title = new Component('h1', 'body', { textContent: 'Olá, Mundo!' })
console.log(title) // Mostra o objeto no console para debug
title.render() // Adiciona o título ao DOM

title.tag = 'h3' // Muda a tag de h1 para h3
title.build().render() // Reconstrói o elemento e renderiza novamente

// Criando um formulário
const form = new Form('body') // Cria um <form> dentro do <body>

// Criando elementos do formulário individualmente
const label = new Label('Nome: ', form, { htmlFor: 'nameInput' }) // Label para o campo nome
const input = new Input(form, { id: 'nameInput', name: 'name' }) // Input para o campo nome

// Renderizando os elementos no DOM
form.render()  
label.render() 
input.render()

form.addChildren(input)

// Usando addChildren para adicionar múltiplos elementos de uma vez
form.addChildren(
  new Component('br'),  
  new Component('br'),  
  new Label('Data de nascimento: ', { htmlFor: 'birthdayInput' }), 
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' }) 
)
