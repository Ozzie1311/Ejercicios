import Stories from './pages/Stories.js'
import Item from './pages/items.js'

const router = new Navigo(null, true, '#')

export default class RouterHandler {
  constructor() {
    this.createRoutes()
  }

  createRoutes() {
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories },
      { path: '/favorites', page: Stories },
      { path: '/item', page: Item },
    ]

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path)
        })
        .resolve()
    })
  }
}
