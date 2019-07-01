import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';

describe('App Component', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).not.toBe(undefined);
  });

});
