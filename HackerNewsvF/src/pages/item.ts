import baseUrl from '../utils/baseUrl'
import view from '../utils/view'
import checkFavorite from '../utils/checkFavorite'
import Story from '../components/Story'
import Comment from '../components/Comment'
import type { Comment as CommentInterface } from '../components/Comment'
import store from '../../store'

export default async function Item(path: string) {
  let story = null
  let hasComments: boolean = false
  let hasError: boolean = false
  const { favorites } = store.getState()

  try {
    story = await getStory(path)
    hasComments = story.comments.length > 0
  } catch (error) {
    hasError = true
    console.error(error)
  }

  if (hasError) {
    if (!view) return
    view.innerHTML = `<div class="error">Error fetching story</div>`
  }

  if (view) {
    view.innerHTML = `
      <div>
        ${Story({ ...story, isFavorite: checkFavorite(favorites, story) })}
      </div>
      <hr/>
      ${
        hasComments
          ? story.comments
              .map((comment: CommentInterface) => Comment(comment))
              .join('')
          : 'No hay comentarios'
      }
    `
  }
}

async function getStory(path: string) {
  const storyId = window.location.hash.split('?id=')[1]
  try {
    const response = await fetch(`${baseUrl}${path}/${storyId}`)
    if (!response.ok) throw new Error()
    const story = await response.json()
    return story
  } catch (error) {
    console.error(error)
  }
}
