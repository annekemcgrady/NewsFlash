import { newsAPI_KEY, giphyAPI_KEY } from './apiKeys';
import { fetchHeadlines, fetchCategoryHeadlines, fetchGIF } from './apiCalls.js'

describe('apiCalls', () => {
  describe('fetchHeadlines', () => {

    let mockHeadlinesResponse;

    beforeEach(()=> {
      mockHeadlinesResponse = {title: 'Title', content: 'words' }
    
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: true,
          json: ()=> Promise.resolve(mockHeadlinesResponse)
        })
      })
    })

    it('should be called with correct params', () => {
      const expected = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${newsAPI_KEY}`
      fetchHeadlines()
      expect(window.fetch).toHaveBeenCalled()
    })

    it('should return a parsed response if status is ok', async ()=> {
      const result = await fetchHeadlines()
      expect(result).toEqual(mockHeadlinesResponse)
    })

    it('should return an error is status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      await expect(fetchHeadlines()).rejects.toEqual(Error('There was a problem finding articles'))
    })
  })

  describe('fetchCategoryHeadlines', () => {
    let mockQuery
    let mockHeadlinesResponse;

    beforeEach(()=> {
      mockQuery = 'fakenews'
      mockHeadlinesResponse = {title: 'Title', content: 'words' }
    
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: true,
          json: ()=> Promise.resolve(mockHeadlinesResponse)
        })
      })
    })

    it('should be called with correct params', () => {
      const expected = `https://newsapi.org/v2/top-headlines?country=us&category=${mockQuery}&apiKey=${newsAPI_KEY}`
      fetchCategoryHeadlines(mockQuery)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response if status is ok', async ()=> {
      const result = await fetchCategoryHeadlines()
      expect(result).toEqual(mockHeadlinesResponse)
    })

    it('should return an error is status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      await expect(fetchCategoryHeadlines()).rejects.toEqual(Error('There was a problem finding articles'))
    })
  })


});