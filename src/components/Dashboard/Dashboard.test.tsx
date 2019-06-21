import React from 'react';
import { DashboardProps, Dashboard } from './Dashboard';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Dashboard Component', () => {

  let wrapper: ShallowWrapper;
  let props: DashboardProps;

  beforeEach(() => {
    props = {
      project: {
        projectName: 'jest-test',
        requirements: []
      }
    };

    wrapper = shallow(<Dashboard {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).not.toBe(undefined);

    expect(wrapper.find('div').hasClass('container mt-3')).toBe(true);
  });

});
