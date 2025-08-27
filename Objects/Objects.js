// Challenge:
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// const bar = 'Next'
// const cafe = 'TP Café'
// const restaurant = "Cake's Lunch"

// const favoritePlaces = {
//   bar,
//   cafe,
//   restaurant,
//   greeting() {
//     console.log('This is a message logged out in the console')
//   },
// }

// favoritePlaces.greeting()
// // console.log(`My favorite restaurant is: ${favoritePlaces.restaurant}`)
// // console.log(greeting)

// const colors = {
//   yellow: 'ff0',
//   blue: 'f00',
//   orange: 'f70',
// }

// const getColors = (key) => colors[key]

// console.log(getColors('blue'))
// console.log(getColors('yellow'))
// console.log(getColors('orange'))

// const user = {
//   name: 'Oswaldo',
//   age: 32,
// }

// function getStatus(obj) {
//   console.log(user[obj])
// }

// getStatus('age')
/* 
  ------------------------------
*/
// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

// const recommendations = {
//   pancakes: 'Nowhere Man',
//   riceBowls: 'Pompoko',
//   beer: 'The Craft Beer Co.',
//   coffee: 'Coffee Roasters',
//   small_plates: 'Venetian Plates',
//   music: {
//     traditional: "Fiddler's Elbow",
//     jazz: 'The Paris House',
//   },
// }

// const getInfo = ({ music: { traditional, jazz } }) => {
//   console.log(`${traditional} ${jazz}`)
// }

// getInfo(recommendations)

const user = {
  name: 'Oswaldo',
  age: 32,
  gender: 'male',
  proffesion: 'Former developer',
}

const newUser = {
  name: 'Pedro',
  age: 22,
}

// const newCopy = Object.assign({}, user, newUser)
// console.log(user)
// console.log(newCopy)
const newCopy = { ...user, ...newUser }
console.log(user)
console.log(newCopy)
