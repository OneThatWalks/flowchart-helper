import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FlowEditor, FlowEditorProps } from './FlowEditor';

describe('FlowEditor Component', () => {

	let wrapper: ShallowWrapper;
	let props: FlowEditorProps;

	beforeEach(() => {
		props = {};

		wrapper = shallow(<FlowEditor {...props} />);

	});

	it('renders without crashing', () => {
		// Assert
		expect(wrapper).not.toBe(undefined);
	});

});