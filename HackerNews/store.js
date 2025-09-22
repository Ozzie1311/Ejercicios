const initialState = {
  favorites: [],
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_FAVORITE':
      const addedFavorite = payload.favorite
      const favorites = [...state.favorites, addedFavorite]
      return { favorites }
    case 'REMOVE_FAVORITE':
      const removedFavorite = payload.favorite
      const filteredFavorites = state.favorites.filter((favorite) => favorite.id !== removedFavorite.id)
      return { filteredFavorites }
    default:
      return state
  }
}

const action = { type: 'ADD_FAVORITE', payload: { favorite: { title: 'story1', id: 1 } } }
