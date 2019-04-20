export const ADD_TO_HISTORY = 'ADD_TO_HISTORY'
export const REMOVE_FROM_HISTORY = 'REMOVE_FROM_HISTORY'

export const addToHistory = item => ({
  type: ADD_TO_HISTORY,
  item
})

export const removeFromHistory = index => ({
  type: REMOVE_FROM_HISTORY,
  index
})