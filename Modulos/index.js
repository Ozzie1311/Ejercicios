import { getDate } from './utils/date.js'

class App {
  constructor() {
    this.render()
  }

  render() {
    document.getElementById('prueba').innerHTML = ` 
      <div>
        Date: ${getDate()}
      </div>
    `
  }
}

new App()
