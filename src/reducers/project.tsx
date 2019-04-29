import { ProjectActionTypes, SET_PROJECT_NAME, ProjectState } from "../constants/types";

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
        default:
            return state;
    }
}

export default projectReducer;