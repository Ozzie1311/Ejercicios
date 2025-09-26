import view from '../utils/view'
import checkFavorite from '../utils/checkFavorite'
import Story from '../components/Story'
import store from '../../store'

export default function Favorites() {
  const { favorites } = store.getState()
  const hasFavorites = favorites.length > 0

  if (view) {
    view.innerHTML = `<div>
      ${
        hasFavorites
          ? favorites
              .map((story) =>
                Story({ ...story, isFavorite: checkFavorite(favorites, story) })
              )
              .join('')
          : 'No hay elementos para mostrar'
      }
    </div>`
  }

  document.querySelectorAll('.favorite').forEach((favoriteButton: Element) => {
    favoriteButton.addEventListener('click', (event) => {
      if (!event.target) return
      const story = JSON.parse(event.target.dataset.story)
      const isFavorited = checkFavorite(favorites, story)
      store.dispatch({
        type: isFavorited ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: { favorite: story },
      })
      Favorites()
    })
  })
}
