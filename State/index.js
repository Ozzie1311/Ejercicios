class App {
  constructor() {
    this.state = {
      isAuth: false,
      error: '',
    }
    this.checkAuth()
    this.render()
  }

  checkAuth() {
    const user = true
    if (user) {
      this.state = { ...this.state, isAuth: true }
    } else {
      this.state = { ...this.state, error: 'You must sign in!' }
    }
  }

  render() {
    const { isAuth, error } = this.state
    document.getElementById('prueba').innerHTML = `
      <div>
        <span style="color:${error && 'red'}">${
      isAuth ? 'Welcome back!' : error
    }</span>
      </div>
    `
  }
}

new App()
