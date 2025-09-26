import type { StoryInterface } from '../components/Story.ts'

export default function checkFavorite(
  favorites: StoryInterface[],
  story: StoryInterface
) {
  return favorites.some((favorite) => story.id === favorite.id)
}
