import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('should match the snapshot with no thoughts', () => {
    const mockState = [];
    const wrapper = shallow(
      <ThoughtList
        thoughtList={mockState}
      />)
    
      expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with thoughts', () => {
    const mockState = [ 
      {body: "c", id: 0, title: "c"}, 
      {body: "d", id: 1, title: "d"}  
    ];
    const wrapper = shallow(
      <ThoughtList  
        thoughtList={mockState}
      />)

      expect(wrapper).toMatchSnapshot()
  });

});
