import { Persona } from ".";

export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const ADD_PERSONA = 'ADD_PERSONA';
export const UPDATE_PERSONA = 'UPDATE_PERSONA';

interface SetProjectAction {
    type: typeof SET_PROJECT_NAME,
    data: string;
}

interface UpdatePersonaAction {
    type: typeof UPDATE_PERSONA,
    data: Persona
}

interface AddPersonaAction {
    type: typeof ADD_PERSONA,
    data: Persona
}

export type ProjectActionTypes = SetProjectAction | AddPersonaAction | UpdatePersonaAction;

export interface ProjectState {
    projectName: string;
    personas: Array<Persona>;
}