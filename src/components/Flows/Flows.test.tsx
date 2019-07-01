import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Flows, FlowsProps } from './Flows';
import { testProject } from 'setupTests';
import { createBrowserHistory, createLocation } from 'history';

describe('Flows Component', () => {

	let wrapper: ShallowWrapper;
	let props: FlowsProps;
	let historyFn = jest.fn();

	beforeEach(() => {
		props = {
			project: {
				...testProject,
				flows: []
			},
			history: createBrowserHistory(),
			location: createLocation(''),
			match: {
				isExact: false,
				params: '',
				path: '',
				url: ''
			}
		};

		props.history.push = historyFn;

		wrapper = shallow(<Flows {...props} />);
	});

	it('renders without crashing', () => {
		// Assert
		expect(wrapper).not.toBe(undefined);
	});

	it('displays add button', () => {
		// Arrange
		const buttonQuery = wrapper.find('#addFlowButton');

		// Assert
		expect(buttonQuery.length).toEqual(1);
		expect(buttonQuery.first().text()).toEqual('Add');
	});

	it('navigates to editor when add clicked', () => {
		// Arrange
		const button = wrapper.find('#addFlowButton').first();

		// Act
		button.simulate('click', {});

		// Assert
		expect(historyFn.mock.calls.length).toEqual(1);
	});



});