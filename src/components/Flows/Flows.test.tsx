import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Flows, FlowsProps } from './Flows';
import { testProject } from 'setupTests';
import { createBrowserHistory, createLocation } from 'history';

describe('Flows Component', () => {

	let wrapper: ShallowWrapper;
	let props: FlowsProps;
	let historyFn: jest.Mock<any, any>;

	beforeEach(() => {
		historyFn = jest.fn();

		props = {
			project: {
				...testProject,
				flows: [
					{
						id: 1,
						name: 'flow-1'
					}
				]
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
		expect(historyFn.mock.calls[0][0]).toEqual('/flowEditor?id=0');
	});

	it('displays flows when flows exist in project', () => {
		// Assert
		expect(wrapper.find('button.list-group-item').first().text()).toEqual('flow-1')
	});

	it('redirects to flow editor when flow pressed', () => {
		// Arrange
		const button = wrapper.find('button.list-group-item').first();

		// Act
		button.simulate('click', {
			currentTarget: {
				getAttribute: (attribute: string) => { return '1' }
			}
		});

		// Assert
		expect(historyFn.mock.calls.length).toEqual(1);
		expect(historyFn.mock.calls[0][0]).toEqual('/flowEditor?id=1');
	});

	it('does not redirect when flow error in rendering', () => {
		// Arrange
		const button = wrapper.find('button.list-group-item').first();

		// Act
		button.simulate('click', {
			currentTarget: {
				getAttribute: (attribute: string) => { return null }
			}
		});

		// Assert
		expect(historyFn.mock.calls.length).toEqual(0);
	});

});