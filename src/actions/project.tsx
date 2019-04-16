import { SET_PROJECT_NAME, Persona, ADD_PERSONA, ProjectActionTypes, UPDATE_PERSONA, REMOVE_PERSONA, UseCase, ADD_USE_CASE, REMOVE_USE_CASE } from "../constants/types";

export function setProjectName(projectName: string): ProjectActionTypes {
    return {
        type: SET_PROJECT_NAME,
        data: projectName
    }
}

export function updatePersona(persona: Persona): ProjectActionTypes {
    return {
        type: UPDATE_PERSONA,
        data: persona
    }
}

export function addPersona(persona: Persona): ProjectActionTypes {
    return {
        type: ADD_PERSONA,
        data: persona
    }
}

export function removePersona(persona: number): ProjectActionTypes {
    return {
        type: REMOVE_PERSONA,
        data: persona
    }
}

export function addUseCase(useCase: UseCase): ProjectActionTypes {
    return {
        type: ADD_USE_CASE,
        data: useCase
    }
}

export function removeUseCase(useCaseId: number): ProjectActionTypes {
    return {
        type: REMOVE_USE_CASE,
        data: useCaseId
    }
}