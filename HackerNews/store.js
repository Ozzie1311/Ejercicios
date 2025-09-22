function createStore(reducer) {
  let currentState = reducer(undefined, {})

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
  }

  return { getState, dispatch }
}

const initialState = {
  favorites: [],
}

export const ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action
  const { ADD_FAVORITE, REMOVE_FAVORITE } = ACTIONS
  switch (type) {
    case ADD_FAVORITE: {
      const addedFavorite = payload.favorite
      const favorites = [...state.favorites, addedFavorite]
      return { favorites }
    }
    case REMOVE_FAVORITE: {
      const removeFavorite = payload.favorite
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== removeFavorite.id
      )
      return { favorites }
    }
    default:
      return state
  }
}

const store = createStore(favoritesReducer)
export default store
