// Challenge:
// 1. Select h1 and add a click event listener.
// Log the text from the element to the console.

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', (event) => {
  console.log(event.target.textContent)
})

console.log(navigator.deviceMemory)
console.log(
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
  })
)
