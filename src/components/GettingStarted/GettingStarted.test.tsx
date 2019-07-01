import React from 'react';
import { ShallowWrapper, shallow, HTMLAttributes } from "enzyme";
import { GettingStartedProps, GettingStarted } from "./GettingStarted";
import { Redirect } from 'react-router';
import { testProject } from 'setupTests';


describe('GettingStarted Component', () => {

	let wrapper: ShallowWrapper;
	let props: GettingStartedProps;
	let setProjectName: jest.Mock<any, any>;

	beforeEach(() => {
		setProjectName = jest.fn();

		props = {
			setProjectName: setProjectName,
			navbar: {
				links: []
			},
			project: {
				...testProject,
				projectName: ''
			}
		};

		wrapper = shallow(<GettingStarted {...props} />);
	});

	it('renders without crashing', () => {
		// Assert
		expect(wrapper).not.toBe(undefined);
	});

	it('calls set project name when input changed', () => {
		// Arrange
		const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input[id="projectName"]').first();

		// Act
		input.simulate('change', {
			target: {
				value: 't'
			}
		});

		// Assert
		expect(wrapper.state('name')).toEqual('t');
	});

	// TODO: watch https://github.com/facebook/jest/issues/2441
	it('submits successfully', () => {
		// Arrange
		const submit: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('form').first();
		const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input[id="projectName"]').first();

		// Act
		input.simulate('change', {
			target: {
				value: 'test'
			}
		});
		submit.simulate('submit', {
			preventDefault: () => { }
		});

		// Assert
		expect(setProjectName.mock.calls.length).toBe(1);
	});

	it('redirects after submit', () => {
		// Arrange
		const gettingStarted = wrapper.instance();

		// Act
		gettingStarted.setState({ ...gettingStarted.state, submitted: true });

		// Assert
		expect(wrapper.containsMatchingElement(<Redirect to="/dashboard" />)).toEqual(true);
	});
});