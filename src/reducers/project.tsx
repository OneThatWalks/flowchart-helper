import { ProjectActionTypes, SET_PROJECT_NAME, ProjectState, ADD_PERSONA, UPDATE_PERSONA, REMOVE_PERSONA, ADD_USE_CASE, REMOVE_USE_CASE } from "../constants/types";

const initialState: ProjectState = {
    projectName: '',
    personas: [],
    useCases: []
};

let personaIdCounter = 0,
    useCaseIdCounter = 0;

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
                if (state.personas.find(p => p.name === '' && p.shortDescription === '')) {
                    // Do not add more than one new persona
                    return state;
                }
                personaIdCounter += 1;

                const newAction = {
                    ...action.data,
                    id: personaIdCounter
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
                personas: [...state.personas.filter(p => p.id !== action.data.id), action.data]
            };
        case REMOVE_PERSONA:
            return {
                ...state,
                personas: [...state.personas.filter(p => p.id !== action.data)]
            };
        case ADD_USE_CASE:
            if (state.useCases.find(useCase => useCase.id === action.data.id)) {
                return state;
            }

            if (action.data.id === 0) {
                if (state.useCases.find(useCase => useCase.useCase === '')) {
                    // Do not add more than one new persona
                    return state;
                }
                useCaseIdCounter += 1;

                const newAction = {
                    ...action.data,
                    id: useCaseIdCounter
                };

                return {
                    ...state,
                    useCases: [...state.useCases, newAction]
                };
            }

            return {
                ...state,
                useCases: [...state.useCases, action.data]
            };
        case REMOVE_USE_CASE:
            return {
                ...state,
                useCases: [...state.useCases.filter(uc => uc.id !== action.data)]
            };
        default:
            return state;
    }
}

export default projectReducer;