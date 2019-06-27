import React from 'react';
import { Header, HeaderProps } from './Header';
import { ShallowWrapper, shallow } from 'enzyme';

describe('Header Component', () => {
	let wrapper: ShallowWrapper;
	let props: HeaderProps;

	beforeEach(() => {
		props = {
			project: {
				projectName: 'test',
				requirements: []
			}
		}

		wrapper = shallow(<Header {...props} />);
	});

	it('renders without crashing', () => {
		// Act & Assert
		expect(wrapper).not.toBe(undefined);
	});

	it('displays project name', () => {
		// Act & Assert
		expect(wrapper.contains(<span>{props.project.projectName}</span>)).toEqual(true);
	});

});
