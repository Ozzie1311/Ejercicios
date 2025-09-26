import Navigo from 'navigo'
import Stories from './pages/stories'
import Item from './pages/item'
import Favorites from './pages/favorites'

const router = new Navigo('/', { hash: true, strategy: 'ONE' })

export default class RouterHandler {
  constructor() {
    this.createRoutes()
  }

  createRoutes() {
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/show', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/item', page: Item },
      { path: '/favorites', page: Favorites },
    ]

    routes.forEach(({ path, page }) => {
      router.on(path, () => {
        page(path)
      })
    })
    router.resolve()
  }
}
