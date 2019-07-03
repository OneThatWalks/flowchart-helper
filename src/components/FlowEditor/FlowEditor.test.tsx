import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FlowEditor, FlowEditorProps } from './FlowEditor';
import { createBrowserHistory, createLocation } from 'history';

describe('FlowEditor Component', () => {

	let wrapper: ShallowWrapper;
	let props: FlowEditorProps;

	beforeEach(() => {
		props = {
			history: createBrowserHistory(),
			location: createLocation(''),
			match: {
				isExact: false,
				params: {
					id: '0'
				},
				path: '',
				url: ''
			}
		};

		wrapper = shallow(<FlowEditor {...props} />);

	});

	it('renders without crashing', () => {
		// Assert
		expect(wrapper).not.toBe(undefined);
	});

});