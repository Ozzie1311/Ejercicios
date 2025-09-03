// Challenge:
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const h1 = document.querySelector('h1')
h1.innerText = 'Vamos a ponerle cualquier otro título'
const h2 = document.createElement('h2')
h2.classList.add('tagline')
h2.innerText = 'I can create HTML elements!'
h1.append(h2)
