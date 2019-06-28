import projectReducer from "./project";
import { ProjectState, SET_PROJECT_NAME, REMOVE_REQUIREMENT, ADD_REQUIREMENT } from "constants/types";


describe('project reducer', () => {
	it('should handle set project name', () => {
		// Arrange
		const initialState: ProjectState = {
			projectName: '',
			requirements: []
		}

		// Act
		const result = projectReducer(initialState, { type: SET_PROJECT_NAME, data: 'test' });

		expect(result.projectName).toEqual('test');
	});

	it('should handle add requirement', () => {
		// Arrange
		const initialState: ProjectState = {
			projectName: '',
			requirements: []
		}

		// Act
		const result = projectReducer(initialState, {
			type: ADD_REQUIREMENT, data: {
				id: 1,
				name: 'test'
			}
		});

		// Assert
		expect(result.requirements.length).toEqual(1);
	});

	it('should handle remove requirement', () => {
		// Arrange
		const initialState: ProjectState = {
			projectName: '',
			requirements: [{
				id: 1,
				name: 'test'
			}]
		}

		// Act
		const result = projectReducer(initialState, {
			type: REMOVE_REQUIREMENT, data: {
				id: 1,
				name: 'test'
			}
		});

		// Assert
		expect(result.requirements.length).toEqual(0);
	});
});

export default {};