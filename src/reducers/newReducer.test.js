import { newsReducer }  from './newsReducer';

describe('newsReducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = newsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return an array of headlines', () => {
    const addHeadlinesAction = {
      type: 'ADD_HEADLINES',
      headlines: [{title: 'article one'}, {title:'article two'}]
    }

    const expected = [{title: 'article one'}, {title:'article two'}]
    const result = newsReducer([], addHeadlinesAction)
    expect(result).toEqual(expected)
  })

});