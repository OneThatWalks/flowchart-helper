import React from 'react';
import UlNavLink, { UlNavLinkProps } from './UlNavLink';
import { ShallowWrapper, shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('UlNavLink Component', () => {

	let wrapper: ShallowWrapper;
	let props: UlNavLinkProps;

	beforeEach(() => {
		props = {
			name: 'test',
			value: 'test'
		};

		wrapper = shallow(<UlNavLink {...props} />);
	});

	it('renders without crashing', () => {
		// Assert
		expect(wrapper).not.toBe(undefined);
	});

	it('contains proper class', () => {
		// Assert
		expect(wrapper.find('li').hasClass('nav-item')).toEqual(true);
	});

	it('renders link', () => {
		// Assert
		expect(wrapper.containsMatchingElement(<Link to={props.value} className="nav-link">{props.name}</Link>)).toEqual(true);
	});
});
