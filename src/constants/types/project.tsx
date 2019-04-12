import { Persona } from ".";

export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const ADD_PERSONA = 'ADD_PERSONA';
export const UPDATE_PERSONA = 'UPDATE_PERSONA';
export const REMOVE_PERSONA = 'REMOVE_PERSONA';

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

interface RemovePersonaAction {
    type: typeof REMOVE_PERSONA,
    data: number
}

export type ProjectActionTypes = SetProjectAction | AddPersonaAction | UpdatePersonaAction | RemovePersonaAction;

export interface ProjectState {
    projectName: string;
    personas: Array<Persona>;
}