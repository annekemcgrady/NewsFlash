export const newsReducer = (state =[], action) => {
  switch(action.type) {
    case 'ADD_HEADLINES': 
    return action.headlines
    default:
    return state
  }
}