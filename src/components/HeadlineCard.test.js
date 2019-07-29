import React from 'react';
import HeadlineCard from './HeadlineCard.js'
import { shallow } from 'enzyme';


describe('HeadlineCard', () => {
  let wrapper;
  let data = {title: 'words', author:'author'}

  it('should match the snapshot', () => {
    wrapper = shallow(<HeadlineCard data={data} />)
    expect(wrapper).toMatchSnapshot()
  })
  
})