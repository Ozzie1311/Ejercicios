export interface StoryInterface {
  index: number
  url: string
  title: string
  domain: string
  points: number
  user: string
  time_ago: string
  id: number
  comments_count: number
  isFavorite: boolean
}

export default function Story(story: StoryInterface) {
  return `
    <div class="story">
      <div> 
        <span class="gray">${story.index || ''}</span>
        <span class="upvote">▲</span>
        <a href="${story.url}">${story.title}</a>
        <span>(${story.domain})</span>
      </div>
      <div>
        <div class="gray">
          ${story.points} points by ${story.user} ${story.time_ago}
          |
          <a href="#/item?id=${story.id}">
            ${story.comments_count} comments
          </a>
          |
          <span class="favorite" data-story='${JSON.stringify(story)}'>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="${
              story.isFavorite ? 'red' : 'currentColor'
            }"  class="icon icon-tabler icons-tabler-filled icon-tabler-heart heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
            ${story.isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
          </span>
        </div>
      </div>
    </div>
  `
}
