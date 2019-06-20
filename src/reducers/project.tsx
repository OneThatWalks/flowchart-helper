import { ProjectActionTypes, SET_PROJECT_NAME, ProjectState, ADD_REQUIREMENT, REMOVE_REQUIREMENT } from "../constants/types";

const initialState: ProjectState = {
    projectName: '',
    requirements: []
};

function projectReducer(state = initialState, action: ProjectActionTypes): ProjectState {
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
                    requirements: state.requirements.filter((value: string, index: number) => { return index !== action.data.index && value !== action.data.requirement})
                }
        default:
            return state;
    }
}

export default projectReducer;