import Story from './pages/stories'

const router = new Navigo(null, true, '#')

export default class RouterHandler {
  constructor() {
    this.createRoutes()
  }

  createRoutes() {
    const routes = [
      { path: '/', page: Story },
      { path: '/show', page: Story },
      { path: '/item', page: Story },
    ]

    routes.forEach((route) => {
      router
        .on(route.path, () => {
          route.page()
        })
        .resolve()
    })
  }
}
