// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

// const songs = [
//   { song: 'Shape of You', timesStreamed: 2.384, wonGrammy: true },
//   { song: 'One Dance', timesStreamed: 1.791, wonGrammy: false },
//   { song: 'Rockstar', timesStreamed: 1.781, wonGrammy: false },
//   { song: 'Closer', timesStreamed: 1.688, wonGrammy: false },
//   { song: 'Thinking Out Loud', timesStreamed: 1.461, wonGrammy: true },
// ]

// const isWonGrammy = songs.some(({ wonGrammy }) => wonGrammy)
// const allStreamed = songs.every(({ timesStreamed }) => timesStreamed > 1.5)
// console.log(allStreamed)

// 2) Añadir una nueva propiedad a cada uno de los objetos del array

// const temperatures = [
//   { degrees: 69, isRecordTemp: false },
//   { degrees: 82, isRecordTemp: true },
//   { degrees: 73, isRecordTemp: false },
//   { degrees: 64, isRecordTemp: false },
// ]

// const newTemperatures = temperatures.map((temperature) =>
//   temperature.degrees > 70 ? { ...temperature, isHigh: true, isRecordTemp: true } : temperature,
// )

// newTemperatures.forEach(({ degrees, isRecordTemp }) => {
//   isRecordTemp ? console.log(`Temperature of ${degrees} was a record temp last week`) : null
// })

// const restaurants = [
//   { name: 'Cap City Diner', milesAway: 2.2 },
//   { name: 'Chop Shop', milesAway: 4.1 },
//   { name: 'Northstar Cafe', milesAway: 0.9 },
//   { name: 'City Tavern', milesAway: 0.5 },
//   { name: 'Shake Shack', milesAway: 5.3 },
// ]

// const filterRestaurants = restaurants.filter(
//   ({ name, milesAway }) => name.startsWith('C') && milesAway < 3
// )
// console.log(filterRestaurants)

/* Reduce Method */
// Challenge:
// Use reduce() to sum the weights of all the cars
// Stretch goal:
// Use reduce to sum the weights of only the electric cars

// const cars = [
//   { name: 'Toyota', isElectric: false, weight: 1320 },
//   { name: 'Ford', isElectric: false, weight: 1400 },
//   { name: 'Volkswagen', isElectric: false, weight: 1370 },
//   { name: 'Honda', isElectric: false, weight: 1375 },
//   { name: 'Tesla', isElectric: false, weight: 1750 },
//   { name: 'BMW', isElectric: false, weight: 1350 },
// ]

// const some = cars.reduce((acum, { isElectric }) => {
//   return acum || isElectric
// }, false)

// console.log(some)

// const every = cars.reduce((acum, { isElectric }) => {
//   return acum && isElectric
// }, false)

// const sumElectricsCars = cars.reduce((acum, { isElectric, weight }) => {
//   return isElectric ? Number((acum += weight)) : acum
// }, 0)

// console.log(sumElectricsCars)

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// const num = numbers.reduce((acum, number) => {
//   acum.push(number * 5)
//   return acum
// }, [])

// console.log(num)

/* Spread Operator */
// const breakfastMenuIdeas = ['Buckwheat Pancakes']
// const dinnerMenuIdeas = ['Glazed Salmon', 'Meatloaf', 'American Cheeseburger']

// const allMenuIdeas = [
//   ...breakfastMenuIdeas,
//   'Pasticho',
//   'Pollo a la Broaster',
//   ...dinnerMenuIdeas,
// ]

// const pastichoIndex = allMenuIdeas.findIndex((meal) => meal === 'Pasticho')
// const meatloafIndex = allMenuIdeas.findIndex((meal) => meal === 'Meatloaf')

// const finalMenuIdeas = [
//   // ...allMenuIdeas.slice(0, pastichoIndex),
//   ...allMenuIdeas.slice(pastichoIndex + 1),
// ]

// // const finalMenuIdeas = allMenuIdeas.filter((meal) => meal !== 'Pasticho')
// console.log(finalMenuIdeas)

// const finalMenuItems = [
//   'American Cheeseburger',
//   'Southern Fried Chicken',
//   'Glazed Salmon',
// ]

// const [winner, ...otherWinners] = finalMenuItems
// console.log({ winner })
// console.log({ otherWinners })

// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

// const fishDishes = [
//   'Salmon Rillettes',
//   'Grilled Tuna Provencal',
//   'Fish and Chips',
// ]
// const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// const [chefFishDishes, ...regularFishDishes] = fishDishes
// const [regularMeatDishes, ...chefMeatDishes] = meatDishes

// let chefDishes = [chefFishDishes, ...chefMeatDishes]
// let regularDishes = [...regularFishDishes, regularMeatDishes]

// console.log({ chefDishes, regularDishes })

// const salmonIndex = fishDishes.findIndex((dish) => dish.startsWith('S'))
// let chefFishDishes = [...fishDishes.slice(salmonIndex, 1)]
// let regularFishDishes = [...fishDishes.slice(salmonIndex + 1)]

// let chefMeatDishes = meatDishes.filter((dish) => dish.startsWith('S'))
// let regularMeatDishes = meatDishes.filter((dish) => !dish.startsWith('S'))

// let chefDishes = [...chefFishDishes, ...chefMeatDishes]
// let regularDishes = [...regularFishDishes, ...regularMeatDishes]

// console.log({ chefDishes }, { regularDishes })

/** Turn objects into flexibles arrays */

// const oswaldoMonthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95,
// }

// const totalExpenses = Object.values(oswaldoMonthlyExpenses).reduce(
//   (acc, curr) => {
//     return acc + curr
//   },
//   0
// )

// console.log(`${totalExpenses}$ mosthly expended`)

// const users = {
//   2345234: {
//     name: 'John',
//     age: 29,
//   },
//   8798129: {
//     name: 'Jane',
//     age: 42,
//   },
//   1092384: {
//     name: 'Fred',
//     age: 17,
//   },
// }

// const entries = Object.entries(users).reduce((acc, [userId, { name, age }]) => {
//   if (age > 20) {
//     acc.push({ name, age, userId })
//   }
//   return acc
// }, [])

// console.log(entries[0])

// const customerDishes = [
//   'Chicken Wings',
//   'Fish Sandwich',
//   'Beef Stroganoff',
//   'Grilled Cheese',
//   'Blue Cheese Salad',
//   'Chicken Wings',
//   'Reuben Sandwich',
//   'Grilled Cheese',
//   'Fish Sandwich',
//   'Chicken Pot Pie',
//   'Fish Sandwich',
//   'Beef Stroganoff',
// ]

// const uniqueValues = [...new Set(customerDishes)]
// console.log(uniqueValues)

/** Algunos Ejercicios con el método Reduce
 * 1) Usa reduce usa reduce para sumar el valor de la propiedad númerica en todos los objetos.
 */

// const productos = [
//   { nombre: 'Camisa', precio: 25 },
//   { nombre: 'Pantalón', precio: 40 },
//   { nombre: 'Zapatos', precio: 60 },
//   { nombre: 'Calcetines', precio: 10 },
// ]

// const precioTotal = productos.reduce((acc, { precio }) => acc + precio, 0)
// console.log(precioTotal)

/**
 * 2) Dado un array de palabras, usa reduce para crear un objeto que cuente cuantas veces aparece cada palabra
 */

// const palabras = ['manzana', 'banana', 'manzana', 'naranja', 'banana', 'manzana']

// const conteoPalabras = palabras.reduce((acc, palabra) => {
//   Object.hasOwn(acc, palabra) ? acc[palabra]++ : (acc[palabra] = 1)
//   return acc
// }, {})

// console.log(conteoPalabras)

/**
 * 3) Tienes un array que contiene otros arrays (un array anidado). Usa reduce para aplanar esta estructura en un solo array.
 */
// const arraysAnidados = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]
const arrayAplanado = arraysAnidados.reduce((acc, cur) => {
  return [...acc, ...cur]
}, [])

// console.log(arrayAplanado)

function mapConReduce(array, callback) {
  return array.reduce((acc, curr) => {
    acc.push(callback(curr))
    return acc
  }, [])
}

// const numeros = [1, 2, 3, 4]
// const duplicados = mapConReduce(numeros, (num) => num * 2) // Debería ser [2, 4, 6, 8]

// console.log(duplicados)

/**
 * 5) De manera similar al ejercicio anterior, implementa la funcionalidad del método filter utilizando reduce.
 */

function filterConReduce(array, callback) {
  return array.reduce((acc, curr) => {
    if (callback(curr)) {
      acc.push(curr)
    }
    return acc
  }, [])
}

const edades = [10, 20, 30, 40, 50]
const mayoresDe30 = filterConReduce(edades, (edad) => edad > 30) // Debería ser [40, 50]
console.log(mayoresDe30)
