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

function countdown(start) {
  return () => {
    start -= 1
    return start
  }
}

const countingDown = countdown(10)
