import React from 'react';
import { ShallowWrapper, shallow, HTMLAttributes } from 'enzyme';
import { RequirementsProps, Requirements } from './Requirements';
import { testProject } from 'setupTests';

describe('Requirements Component', () => {

	let wrapper: ShallowWrapper;
	let props: RequirementsProps;
	let addRequirement: jest.Mock<any, any>;
	let removeRequirement: jest.Mock<any, any>;

	beforeEach(() => {

		addRequirement = jest.fn();
		removeRequirement = jest.fn();

		props = {
			project: {
				...testProject,
				requirements: [
					{
						id: 1,
						name: 'test'
					}
				]
			},
			addRequirement: addRequirement,
			removeRequirement: removeRequirement
		};

		wrapper = shallow(<Requirements {...props} />);
	});

	it('renders without crashing', () => {
		// Assert
		expect(wrapper).not.toBe(undefined);
	});

	it('renders expected requirements', () => {
		// Assert
		expect(wrapper.find('li').first().text()).toContain(props.project.requirements[0].name);
	});

	it('removes requirement when remove triggered', () => {
		// Arrange
		const remove: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('li').first().find('button').first();

		// Act
		remove.simulate('click', {});

		// Assert
		expect(removeRequirement.mock.calls.length).toEqual(1);
	});

	it('changes state when typed', () => {
		// Arrange
		const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input').first();

		// Act
		input.simulate('change', {
			currentTarget: {
				value: 'test'
			}
		});

		// Assert
		expect(wrapper.state('input')).toEqual('test');
	});

	it('adds requirement when enter pressed', () => {
		// Arrange
		const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input').first();

		// Act
		input.simulate('change', {
			currentTarget: {
				value: 'test'
			}
		});

		input.simulate('keyUp', {
			key: 'enter',
			currentTarget: {
				value: 'test'
			}
		});

		// Assert
		expect(addRequirement.mock.calls.length).toEqual(1);
		expect(wrapper.state('input')).toEqual('');
	});

	it('does not add requirement when enter pressed and input empty', () => {
		// Arrange
		const input: ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> = wrapper.find('input').first();

		// Act

		input.simulate('keyUp', {
			key: 'enter',
			currentTarget: {
				value: 'test'
			}
		});

		// Assert
		expect(addRequirement.mock.calls.length).toEqual(0);
		expect(wrapper.state('input')).toEqual('');
	});
});
