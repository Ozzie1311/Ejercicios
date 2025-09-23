import view from '../utils/view.js'
import Story from '../components/Story.js'
import store from '../store.js'
import checkFavorite from '../utils/checkFavorite.js'
import { ACTIONS } from '../store.js'

export default async function Stories(path) {
  const { favorites } = store.getState() //Obteniendo el array de favoritos.
  const stories = await getStories(path)
  const hasStories = stories.length > 0

  view.innerHTML = `<div>
    ${
      hasStories
        ? stories
            .map((story, i) =>
              Story({
                ...story,
                index: i + 1,
                isFavorite: checkFavorite(favorites, story),
              })
            )
            .join('')
        : 'No hay historias para mostrar'
    }
  </div>`

  document.querySelectorAll('.favorite').forEach((favoriteButton) => {
    favoriteButton.addEventListener('click', async function () {
      const { ADD_FAVORITE, REMOVE_FAVORITE } = ACTIONS
      const story = JSON.parse(this.dataset.story)
      const isFavorited = checkFavorite(favorites, story) //Valor booleano
      store.dispatch({
        type: isFavorited ? REMOVE_FAVORITE : ADD_FAVORITE,
        payload: { favorite: story },
      })
      await Stories(path)
    })
  })
}

async function getStories(path) {
  const isHomeRoute = path === '/'
  const isNewRoute = path === '/new'

  if (isHomeRoute) {
    path = '/news'
  } else if (isNewRoute) {
    path = '/newest'
  }

  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`)
  const stories = await response.json()
  return stories
}
