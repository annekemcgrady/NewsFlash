import React from 'react';
import NotFound from './NotFound.js'
import { shallow } from 'enzyme';


describe('NotFound', () => {
  let wrapper;
  

  it('should match the snapshot', () => {
    wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
  })
  
})