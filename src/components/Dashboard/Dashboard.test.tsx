import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Dashboard Component', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('renders without crashing', () => {
    const div = <div className="container mt-3"></div>;
    expect(wrapper.contains(div)).toEqual(true);
  });

});
