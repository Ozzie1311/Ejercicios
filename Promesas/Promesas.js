// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Error'), 1000)
// })

// promesa.then((value) => console.log(value)).catch((valor) => console.log(valor))

// const promise = new Promise((resolve, reject) => {
//   navigator.geolocation.getCurrentPosition(resolve, reject)
// })

// promise
//   .then((position) => console.log(position))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('Done'))

const blogPost = {
  title: 'Cool Post',
  body: 'Este es un tremendo post',
  userId: 1,
}

const blogPost2 = {
  title: 'Otro post muy bueno',
  body: 'Este es otro post la verdad bastante bueno',
  userId: 2,
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(blogPost2),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(blogPost),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
