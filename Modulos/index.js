// import { getDate, year } from './utils/date.js'
import { getUser } from './utils/date.js'

// class App {
//   constructor() {
//     this.render()
//   }

//   render() {
//     document.getElementById('prueba').innerHTML = `
//       <div>
//         Date: ${getDate()}
//         Year: ${year}
//       </div>
//     `
//   }
// }
class App {
  constructor() {
    this.render()
  }

  render() {
    const { name, company } = getUser()
    document.getElementById('prueba').innerHTML = `
      <div>
        Name: ${name}, company: ${company}
      </div>
    `
  }
}

new App()
