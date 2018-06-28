import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <ThoughtCard
        title='title'
        body='body'
        id={1} 
      />) 

    expect(wrapper).toMatchSnapshot()
  });

});
