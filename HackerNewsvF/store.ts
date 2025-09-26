import type { StoryInterface } from './src/components/Story'

export interface FavoritesState {
  favorites: StoryInterface[]
}

interface Action {
  type: string
  payload: { favorite: StoryInterface }
}

interface FavoritesReducerInterface {
  (
    state: FavoritesState | undefined,
    action: Action | { type: '@@INIT'; payload: { favorite: StoryInterface } }
  ): FavoritesState
}

function createStore(reducer: FavoritesReducerInterface) {
  let currentState = reducer(undefined, { type: '@@INIT' } as Action)

  function getState() {
    return currentState
  }

  function dispatch(action: Action) {
    currentState = reducer(currentState, action)
  }

  return { getState, dispatch }
}

const initialState: FavoritesState = {
  favorites: [],
}

function favoritesReducer(
  state: FavoritesState = initialState,
  action: Action
) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_FAVORITE': {
      const addedFavorite = payload.favorite
      const favorites = [...state.favorites, addedFavorite]
      return { favorites }
    }
    case 'REMOVE_FAVORITE': {
      const removedFavorite = payload.favorite
      const favorites = state.favorites.filter(
        (story: StoryInterface) => story.id !== removedFavorite.id
      )
      return { favorites }
    }
    default:
      return state
  }
}

const store = createStore(favoritesReducer)
export default store
