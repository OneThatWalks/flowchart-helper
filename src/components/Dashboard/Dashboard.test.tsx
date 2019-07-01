import React from 'react';
import { DashboardProps, Dashboard } from './Dashboard';
import { shallow, ShallowWrapper } from 'enzyme';
import { testProject } from 'setupTests';

describe('Dashboard Component', () => {

	let wrapper: ShallowWrapper;
	let props: DashboardProps;

	beforeEach(() => {
		props = {
			project: {
				...testProject,
				projectName: 'jest-test'
			}
		};

		wrapper = shallow(<Dashboard {...props} />);
	});

	it('renders without crashing', () => {
		expect(wrapper).not.toBe(undefined);

		expect(wrapper.find('div').hasClass('container mt-3')).toBe(true);
	});

});
