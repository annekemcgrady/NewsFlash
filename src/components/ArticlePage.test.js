import React from 'react';
import ArticlePage from './ArticlePage.js'
import { shallow } from 'enzyme';


describe('ArticlePage', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<ArticlePage />)
    expect(wrapper).toMatchSnapshot()
  })
  
})