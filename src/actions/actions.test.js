import * as actions from './index.js';

describe('actions', ()=> {

  it ('addHeadines should have a type of ADD_HEADLINES', ()=> {
      const headlines = [{tite:"Article", content:"Words go here"}]
      const expected = {
        type: 'ADD_HEADLINES',
        user: headlines
      }

      const result = actions.addHeadlines(headlines)

      expect(result).toEqual(expected)
  })
