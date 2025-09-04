const p = document.createElement('p')
p.id = 'miParrafo'
p.textContent = '¡Hola desde JavaScript!'

const h1 = document.createElement('h1')
h1.textContent = 'Práctica de JavaScript'
h1.id = 'tituloPrincipal'
h1.style.color = 'blue'
h1.style.fontSize = '2em'

const div = document.createElement('div')
div.id = 'contenedor'
div.className = 'resaltado'

const divOculto = document.createElement('div')
divOculto.className = 'oculto'
divOculto.id = 'cajaOculta'

const p2 = document.createElement('p')
p2.textContent = 'Este es un párrafo creado dínamicamente'

const a = document.createElement('a')
a.setAttribute('href', 'https://www.google.com')
a.setAttribute('rel', 'noreferrer')
a.setAttribute('target', '_blank')
a.setAttribute('rel', 'noopener')
a.textContent = 'Ir a google'

const ul = document.createElement('ul')
ul.id = 'miLista'
const frutas = ['cambur', 'manzana', 'naranja', 'pera', 'parchita']
for (let fruta of frutas) {
  const li = document.createElement('li')
  li.textContent = fruta
  ul.append(li)
}

const button = document.createElement('button')
button.id = 'miBoton'
button.textContent = 'Click'
button.addEventListener('click', () => {
  alert('¡Hiciste click!')
})

const buttonContador = document.createElement('button')
buttonContador.id = 'botonContador'
buttonContador.textContent = 'Contador'
let contador = 0

const pContador = document.createElement('p')
pContador.id = 'contador'
pContador.textContent = `Clics: 0`

buttonContador.addEventListener('click', () => {
  console.log(`Aumentando el contador: ${contador}`)
  contador++
  pContador.textContent = `Clics: ${contador}`
})

const form = document.createElement('form')
const input = document.createElement('input')
input.id = 'nombreInput'
input.type = 'text'
const submitButton = document.createElement('button')
submitButton.id = 'enviarBoton'
submitButton.type = 'submit'
submitButton.textContent = 'Enviar'

const pMensaje = document.createElement('p')

submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  inputValue = document.querySelector('#nombreInput').value
  if (inputValue === '') {
    pMensaje.textContent = 'El campo de texto no puede estar vaciado'
    form.append(pMensaje)
  } else {
    pMensaje.textContent = 'El formulario ha sido enviado éxitosamente'
    form.append(pMensaje)
  }
})

form.append(input, submitButton)
div.append(h1, p, pContador, buttonContador)
divOculto.append(p2, a, button)
document.body.append(div, divOculto, ul, form)
