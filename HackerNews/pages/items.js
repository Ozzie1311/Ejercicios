import Story from '../components/Story.js'
import Comment from '../components/Comment.js'
import view from '../utils/view.js'

export default async function Item() {
<<<<<<< HEAD
  const story = await getStory()
  console.log(story)
  const hasComments = story.comments.length > 0
=======
  let story = null
  let hasComments = false
  let hasError = false

  try {
    story = await getStory()
    hasComments = story.comments.length > 0
  } catch (error) {
    hasError = true
    console.error(error)
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching the story</div>`
  }
>>>>>>> 4a8f4ee (??)

  view.innerHTML = `
    <div>
      ${Story(story)}
    </div>
<<<<<<< HEAD
    <hr/>
    ${hasComments ? story.comments.map((comment) => Comment(comment)).join('') : ''}
=======
    <hr />
    ${
      hasComments
        ? story.comments.map((comment) => Comment(comment)).join('')
        : 'No comments'
    }
>>>>>>> 4a8f4ee (??)
  `
}

async function getStory() {
  const storyId = window.location.hash.split('?id=')[1]
  const response = await fetch(
    `https://node-hnapi.herokuapp.com/item/${storyId}`
  )
  const story = await response.json()
  return story
}
