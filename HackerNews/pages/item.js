import view from '../utils/view.js'
import { baseUrl } from '../utils/baseUrl.js'
import Story from '../components/Story.js'
import Comment from '../components/Comment.js'

export default async function Item() {
  const story = await getStory()
  console.log(story)
  const hasComments = story.comments.length > 0
  view.innerHTML = `
    <div>
     ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map((comment) => Comment(comment)).join('') : 'No comments to show'}
  `
}

async function getStory() {
  const storyId = window.location.hash.split('?id=')[1]
  const response = await fetch(`${baseUrl}/item/${storyId}`)
  const story = await response.json()
  return story
}
