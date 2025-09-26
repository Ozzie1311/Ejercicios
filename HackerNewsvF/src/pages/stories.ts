import view from '../utils/view.ts'
import baseUrl from '../utils/baseUrl.ts'
import checkFavorite from '../utils/checkFavorite'
import store from '../../store'
import Story from '../components/Story.ts'
import type { StoryInterface } from '../components/Story.ts'

export default async function Stories(path: string) {
  const { favorites } = store.getState()
  const stories = await getStories(path)
  const hasStories: boolean = stories.length > 0

  if (view) {
    view.innerHTML = `
      ${
        hasStories
          ? stories
              .map((story: StoryInterface, i: number) =>
                Story({
                  ...story,
                  index: i + 1,
                  isFavorite: checkFavorite(favorites, story),
                })
              )
              .join('')
          : 'Dos puntitos'
      }
    `
  }

  document.querySelectorAll('.favorite').forEach((favoriteButton: Element) => {
    favoriteButton.addEventListener('click', async (event) => {
      if (!event.target) return
      const story = JSON.parse(event.target.dataset.story)
      console.log(story)
      const isFavorited = checkFavorite(favorites, story)
      store.dispatch({
        type: isFavorited ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: { favorite: story },
      })
      await Stories(path)
    })
  })
}

async function getStories(path: string) {
  const isHomeRoute: boolean = path === '/'
  const isNewRoute: boolean = path === '/new'

  if (isHomeRoute) {
    path = '/news'
  } else if (isNewRoute) {
    path = '/newest'
  }

  try {
    const response = await fetch(`${baseUrl}${path}`)
    if (!response.ok) throw new Error()
    const stories = await response.json()
    return stories
  } catch (error) {
    console.error(error)
  }
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
