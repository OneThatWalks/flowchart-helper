import { Persona } from ".";

export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const ADD_PERSONA = 'ADD_PERSONA';

interface SetProjectAction {
    type: typeof SET_PROJECT_NAME,
    data: string;
}

interface AddPersonaAction {
    type: typeof ADD_PERSONA,
    data: Persona
}

export type ProjectActionTypes = SetProjectAction & AddPersonaAction;

export interface ProjectState {
    projectName: string;
    personas: Array<Persona>;
    validation?: {
        projectName?: string;
        personas?: string;
    }
}