import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })

  it('should match the snapshot', ()=> {
    expect(wrapper).toMatchSnapshot()
  })

  //should call fetchHeadlines

  //should call fetchCategoryHeadlines with a category

  //filterArticles 

  //mapStateToProps

  //mapDispatchToProps

})