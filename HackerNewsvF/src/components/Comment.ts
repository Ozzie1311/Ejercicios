export interface Comment {
  level: string
  user: string
  time_ago: string
  content: string
  comments: []
}

export default function Comment(comment: Comment) {
  const hasNestedComments: boolean = comment.comments.length > 0
  return `
    <div class="nested-comments-${comment.level}">
      <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
      ${
        hasNestedComments
          ? comment.comments.map((comment) => Comment(comment)).join('')
          : ''
      }
    </div>
  `
}
