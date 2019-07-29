import React from 'react';
import ReactDOM from 'react-dom';
import { App, filterArticles, mapStateToProps, mapDispatchToProps } from './App';
import { shallow, mount } from 'enzyme';
import { fetchHeadlines } from '../apiCalls/apiCalls.js';
import {addHeadlines, addError } from '../actions';

describe('App', () => {
  let wrapper;
  let instance;
  let mockFilterArticles;

  let props = {
    responseGeneral: [],
    responseSports: [],
    responseScience: [],
    responseEntertainment: [],
    responseHealth: [],
    responseBusiness: [],
    headlines: [{title: 'artOne', category: 'sports'}, {title: 'artTwo', category: 'general'}],
    addHeadlines: jest.fn(),
    addError: jest.fn(),
  }
  let mockHeadlinesResponse = {title: 'Title', content: 'words' }
  
  jest.mock('../apiCalls/apiCalls.js', () => ({ 
  fetchHeadlines: jest.fn().mockImplementation(()=> {
      return Promise.resolve(mockHeadlinesResponse)
      }), 
  fetchCategoryHeadlines: jest.fn().mockImplementation(()=> {
    return Promise.resolve(mockHeadlinesResponse)
    })
    
  }))

  beforeEach(() => {
    mockFilterArticles = jest.fn()
    wrapper = shallow(<App 
              {...props}
              filterArticles={mockFilterArticles}
            />)
    instance = wrapper.instance()
  })

  it('should match the snapshot', ()=> {
    expect(wrapper).toMatchSnapshot()
  })

it('should call fetchHeadlines on componentDidMount', async ()=> {
  await instance.componentDidMount()
  expect(fetchHeadlines).toHaveBeenCalled()
})

  it('should call fetchCategoryHeadlines on componentDidMount', async ()=> {
    await instance.componentDidMount()
    expect(fetchCategoryHeadlines).toHaveBeenCalled()
  })


  it('filterArticles should return filtered articles', ()=> {
    const expected = [{title: 'artOne', category: 'sports'}]
    const result = wrapper.instance().filterArticles('sports')
    expect(result).toEqual(expected)
    
  })

  describe('mapStateToProps', ()=> { 
    
    it('should return objects with the headlines array', () => {
      const mockState = {
          headlines: [{tite: "words"}],
          error: ""
        }
        const expected = {
          headlines: [{tite: "words"}],
          error: ""
        }
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
      })
  })

  describe('mapDispatchToProps', ()=> {
    it('calls dispatch with a setHeadlines action',()=> {

      const mockDispatch = jest.fn()
      const actionToDispatch = addHeadlines([{title: 'words'}])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setHeadlines([{title: 'words'}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
})

});