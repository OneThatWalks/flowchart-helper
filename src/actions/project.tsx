import { SET_PROJECT_NAME, Persona, ADD_PERSONA } from "../constants/types";

export function setProjectName(projectName: string) {
    return {
        type: SET_PROJECT_NAME,
        data: projectName
    }
}

export function addPersona(persona: Persona) {
    return {
        type: ADD_PERSONA,
        data: persona
    }
}