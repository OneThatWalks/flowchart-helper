import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Splash from './Splash';

describe('Splash Component', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Splash/>);
	});

	it('renders without crashing', () => {
		expect(wrapper).not.toBe(undefined);
	});
});

