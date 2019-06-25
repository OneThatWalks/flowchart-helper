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
  });

  it('calls set project name when input changed', () => {
    const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input[id="projectName"]').first();
    input.simulate('change', {
      target: {
        value: 't'
      }
    });
    expect(wrapper.state('name')).toEqual('t');
  });

  // TODO: watch https://github.com/facebook/jest/issues/2441
  it('submits successfully', () => {
    // find form
    const submit: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('form').first();
    // find input
    const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input[id="projectName"]').first();
    // simulate input
    input.simulate('change', {
      target: {
        value: 'test'
      }
    });
    // simulate submit
    submit.simulate('submit', {
      preventDefault: () => { }
    });
    //
    expect(setProjectName.mock.calls.length).toBe(1);
  });
});