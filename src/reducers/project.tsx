import { ProjectActionTypes, SET_PROJECT_NAME, ProjectState, ADD_REQUIREMENT, REMOVE_REQUIREMENT, Requirement } from "../constants/types";

const initialState: ProjectState = {
	projectName: '',
	requirements: [],
	flows: [],
	services: []
};

function projectReducer(state: ProjectState = initialState, action: ProjectActionTypes): ProjectState {
	switch (action.type) {
		case SET_PROJECT_NAME:
			return {
				...state,
				projectName: action.data
			};
		case ADD_REQUIREMENT:
			return {
				...state,
				requirements: [...state.requirements, action.data]
			};
		case REMOVE_REQUIREMENT:
			return {
				...state,
				requirements: state.requirements.filter((value: Requirement, index: number) => { return value.id !== action.data.id })
			}
		default:
			return state;
	}
}

export default projectReducer;