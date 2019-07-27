export const addHeadlines = (headlines) => {
  return ({
    type: 'ADD_HEADLINES',
    headlines
  })
}

export const addError = (errorMsg) => {
  return ({
    type: 'ADD_ERROR',
    errorMsg
  })
}