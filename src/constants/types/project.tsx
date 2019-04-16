import { Persona, UseCase } from ".";

export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const ADD_PERSONA = 'ADD_PERSONA';
export const UPDATE_PERSONA = 'UPDATE_PERSONA';
export const REMOVE_PERSONA = 'REMOVE_PERSONA';
export const ADD_USE_CASE = 'ADD_USE_CASE';
export const REMOVE_USE_CASE = 'REMOVE_USE_CASE';

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

interface AddUseCaseAction {
    type: typeof ADD_USE_CASE,
    data: UseCase
}

interface RemoveUseCaseAction {
    type: typeof REMOVE_USE_CASE,
    data: number
}

export type ProjectActionTypes = SetProjectAction
    | AddPersonaAction
    | UpdatePersonaAction
    | RemovePersonaAction
    | AddUseCaseAction
    | RemoveUseCaseAction;

export interface ProjectState {
    projectName: string;
    personas: Array<Persona>;
    useCases: Array<UseCase>;
    // TODO: Persona use case map
}