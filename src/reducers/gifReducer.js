export const gifReducer = (state ="", action) => {
  switch (action.type) {
  case 'ADD_GIF':
  return action.gifURL
  default:
  return state
  }
}