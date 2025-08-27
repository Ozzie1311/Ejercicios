// Challenge: Write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// It should return a message with a number.

// function splitBill(totalBill, friends) {
//   return `Each one of you have to pay ${(totalBill / friends).toFixed(2)}$`
// }

// const bill1 = splitBill(10, 2)
// const bill2 = splitBill(16, 4)
// const bill3 = splitBill(350, 9)
// console.log('Cuenta 1: ', bill1)
// console.log('Cuenta 2: ', bill2)
// console.log('Cuenta 3: ', bill3)

//Closures
// function handleLikePost() {
//   let likeCount = 0
//   return function addLike() {
//     likeCount += 1
//     return likeCount
//   }
// }

// const like = handleLikePost()
// console.log(like())
// console.log(like())
// console.log(like())
// console.log(like())

// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// function countdown(start) {
//   return () => {
//     start -= 1
//     return start
//   }
// }

// const countingDown = countdown(10)
// console.log(countingDown())

// 1) Módulo de Contador personalizado -> Crear una función que devuelva un módulo con la capacidad de gestionar un contador, permitiendo establecer su valor inicial y realizar operaciones como incrementar o decrementar.

// function counter(initialValue) {
//   let count = initialValue
//   return {
//     incrementCount: () => {
//       count++
//     },
//     decrementCount: () => {
//       count--
//     },
//     getCountStatus: () => {
//       return `El valor del contador es: ${count}`
//     },
//     resetCount: () => {
//       count = 0
//       return `El contador ha sido resetado.`
//     },
//   }
// }

// const contador = counter(1)

// contador.incrementCount()
// contador.incrementCount()
// contador.incrementCount()
// contador.incrementCount()
// contador.incrementCount()
// contador.incrementCount()
// console.log(contador.getCountStatus())
// console.log(contador.resetCount())
// console.log(contador.getCountStatus())

//2) Fábrica de funciones (Greeting Factory):
// Objetivo: Crear una función que funcione como una "fábrica" para generar otras funciones. Cada función generada debe recordar un valor específico del ámbito de la función madre.

// function greeting(message) {
//   return (name) => `${message}, ${name}`
// }

// const greetingKarolina = greeting('Hola miamor')
// console.log(greetingKarolina('Karolina'))

//3) Objetivo: Utilizar setInterval para crear un temporizador que conserve su estado (como un contador) a través de llamadas repetidas.

// function createTemp() {
//   let count = 0
//   let intervalId = null //Id del intervalo para luego poder limpiarlo.
//   return {
//     startCounter: () => {
//       if (!intervalId) {
//         intervalId = setInterval(() => {
//           count++
//           console.log(`${count}`)
//         }, 1000)
//         console.log(`Iniciando temporizador`)
//       }
//     },
//     stopCounter: () => {
//       if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = null
//         console.log(`Temporizador detenido`)
//       } else {
//         console.log(`El temporizador ya no esta corriendo.`)
//       }
//     },
//     getValue: () => {
//       return `El valor del contador en este momento es: ${count}`
//     },
//     resetCount: () => {
//       count = 0
//       console.log(`El contador ha sido reseteado a 0`)
//     },
//   }
// }

// const timer = createTemp()

// console.log(timer.getValue())

// timer.startCounter()

// setTimeout(() => {
//   timer.stopCounter()
//   console.log(timer.getValue())
//   timer.startCounter()
// }, 7000)

// 4) Imagina que estás construyendo una pequeña aplicación para gestionar el inventario de una tienda. Necesitas una función que permita crear "contadores de productos" individuales para diferentes categorías de productos. Cada contador debe ser independiente y recordar su propio estado.

// function createProductCounter() {
//   let productCount = 0
//   return {
//     incrementar: () => {
//       productCount++
//       return productCount
//     },
//     decrementar: () => {
//       productCount--
//       return productCount
//     },
//     obtenerConteo: () => {
//       return `El conteo actual del producto es: ${productCount}`
//     },
//     resetear: () => {
//       productCount = 0
//       return `El conteo del producto se ha actualizado correctamente.`
//     },
//   }
// }

// const electrodomestico = createProductCounter()
// console.log(electrodomestico.obtenerConteo())
// console.log(electrodomestico.incrementar())
// console.log(electrodomestico.incrementar())
// console.log(electrodomestico.incrementar())
// console.log(electrodomestico.incrementar())
// console.log(electrodomestico.obtenerConteo())

// const createLogger = (prefix) => {
//   return {
//     info: (message, level) => {
//       const time = new Date().toLocaleTimeString()
//       const date = new Date().toLocaleDateString()
//       console.log(`[${date} ${time}] [${level.toUpperCase()}] [${prefix.toUpperCase()}] - ${message}`)
//     },
//   }
// }

// const appLogger = createLogger('app')
// const databaseLogger = createLogger('database')

// appLogger.info('Your app is running succesfuly', 'info')
// databaseLogger.info('Your database is running a error.', 'error')

// const username = 'oswaldo'

// const capitalize = (name) => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// console.log(capitalize(username))

// const splitBill = (amount, numPeople) => `Each person needs to pay $${(amount / numPeople).toFixed(2)}`
// console.log(splitBill(275, 4))

// const countdown = (startingNumber, step) => {
//   let countFromNum = startingNumber
//   return () => (countFromNum -= step)
// }

// const countingDown = countdown(20, 2)
// console.log(countingDown())
// console.log(countingDown())
// console.log(countingDown())
