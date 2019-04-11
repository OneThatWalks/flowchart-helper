import { ProjectActionTypes, SET_PROJECT_NAME, ProjectState, ADD_PERSONA, UPDATE_PERSONA } from "../constants/types";

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
            };
        case ADD_PERSONA:
            if (state.personas.find(persona => persona.id === action.data.id)) {
                return state;
            }
            
            if (action.data.id === 0) {
                const maxId = Math.max.apply(Math, state.personas.map(p => p.id));
                const newAction = {
                    ...action.data,
                    id: maxId
                };
                return {
                    ...state,
                    personas: [...state.personas, newAction]
                };
            }

            return {
                ...state,
                personas: [...state.personas, action.data]
            };
        case UPDATE_PERSONA:
            const findItem = state.personas.find(persona => persona.id === action.data.id);
            if (!findItem) {
                return state;
            }
            return {
                ...state,
                personas: [...state.personas.filter(p => p.id === action.data.id), action.data]
            }
        default:
            return state;
    }
}

export default projectReducer;