import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const wrapper= shallow( 
    <App 
      app={true}
    />)

    expect(wrapper.is('.app')).toEqual(true)
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.state().thoughts).toEqual([])
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const mockState = [ 
      {body: "c", id: 0, title: "c"}, 
      {body: "d", id: 1, title: "d"}  
    ];
  const wrapper  = mount( 
    <App />)

    wrapper.setState({ thoughts: mockState })
    expect(wrapper.find('.thought').length).toEqual(2)
});

it.skip('user can add a new thought which adds it to state and is also displayed on the screen', () => {
});
