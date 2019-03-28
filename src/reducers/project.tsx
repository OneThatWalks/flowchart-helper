import { ProjectActionTypes, SET_PROJECT, ProjectState } from "../constants/types";

const initialState: ProjectState = {
    projectName: 'Cats'
};

function projectReducer(state = initialState, action: ProjectActionTypes): ProjectState {
    switch (action.type) {
        case SET_PROJECT:
            return {
                ...state,
                projectName: action.data
            }
        default:
            return state;
    }
}

export default projectReducer;