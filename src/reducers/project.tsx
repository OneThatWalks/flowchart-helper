import { ProjectActionTypes, SET_PROJECT_NAME, ProjectState, ADD_PERSONA } from "../constants/types";

const initialState: ProjectState = {
    projectName: '',
    personas: []
};

function projectReducer(state = initialState, action: ProjectActionTypes): ProjectState {
    switch (action.type) {
        case SET_PROJECT_NAME:
            return {
                ...state,
                projectName: action.data
            }
        case ADD_PERSONA:
            if (state.personas.find(persona => persona.name === action.data.name)) {
                return {
                    ...state,
                    validation: { personas: 'Persona already exists' }
                }
            }
            return {
                ...state,
                personas: [...state.personas, action.data]
            }
        default:
            return state;
    }
}

export default projectReducer;