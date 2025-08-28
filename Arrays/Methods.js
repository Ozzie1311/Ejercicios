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

const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 },
]

const results = restaurants.filter((restaurant) =>
  restaurant.milesAway > 3
    ? {
        ...restaurant,
        isTooFar: true,
      }
    : restaurant,
)
console.log(results)
