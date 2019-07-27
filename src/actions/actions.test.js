import * as actions from './index.js';

describe('actions', ()=> {

  it ('addHeadines should have a type of ADD_HEADLINES', () => {
      const headlines = [{tite:"Article", content:"Words go here"}]
      const expected = {
        type: 'ADD_HEADLINES',
        headlines
      }

      const result = actions.addHeadlines(headlines)

      expect(result).toEqual(expected)
  })

  it ('addError should have a type of ADD_ERROR', () => {
    const errorMsg = "Oops we are having trouble...please check back soon!"
    const expected = {
      type: 'ADD_ERROR',
      errorMsg
    }

    const result = actions.addError(errorMsg)

    expect(result).toEqual(expected)
})

});
