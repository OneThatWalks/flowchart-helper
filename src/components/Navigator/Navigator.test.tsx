import React from 'react';
import ReactDOM from 'react-dom';
import { ShallowWrapper, shallow } from 'enzyme';
import { Navigator, NavigatorProps } from './Navigator';
import UlNavLink from 'components/UlNavLink/UlNavLink';

describe('Navigator Component', () => {

	let wrapper: ShallowWrapper;
	let props: NavigatorProps;

	beforeEach(() => {
		props = {
			navbar: {
				links: [{ name: 'test', value: 'test' }]
			}
		};

		wrapper = shallow(<Navigator {...props} />);
	});

	it('renders without crashing', () => {
		// Act & Assert
		expect(wrapper).not.toBe(undefined);
	});

	it('renders test link', () => {
		// Act & Assert
		expect(wrapper.contains(<UlNavLink key={0} name={props.navbar.links[0].name} value={props.navbar.links[0].value} />))
	});
});