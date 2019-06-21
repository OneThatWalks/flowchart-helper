import React from 'react';
import { ShallowWrapper, shallow, CommonWrapper, HTMLAttributes } from "enzyme";
import { GettingStartedProps, GettingStarted } from "./GettingStarted";


describe('GettingStarted Component', () => {

  let wrapper: ShallowWrapper;
  let props: GettingStartedProps;

  const [addLink, removeLink, setProjectName] = new Array<jest.Mock<any, any>>(3).fill(jest.fn());

  beforeEach(() => {
    props = {
      addLink: addLink,
      removeLink: removeLink,
      setProjectName: setProjectName,
      start: true,
      navbar: {
        links: []
      },
      project: {
        projectName: '',
        requirements: []
      }
    };

    wrapper = shallow(<GettingStarted {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).not.toBe(undefined);

    expect(wrapper.find('div').first().hasClass('container h-100')).toBe(true);
  });

  it('calls set project name when input changed', () => {
    const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input[id="projectName"]').first();
    input.simulate('change', {
      target: {
        value: 't'
      }
    });
    expect(setProjectName.mock.calls.length).toBe(1);
  });

  // TODO: watch https://github.com/facebook/jest/issues/2441
  it('submits successfully', () => {
    const sumbit: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('button[type="submit"]').first();
    sumbit.simulate('submit');
    expect(removeLink.mock.calls.length).toBe(1);
    expect(addLink.mock.calls.length).toBe(1);
  });
});