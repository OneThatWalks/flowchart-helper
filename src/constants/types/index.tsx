export const SET_PROJECT = 'SET-PROJECT';

interface SetProjectAction {
    type: typeof SET_PROJECT,
    data: string;
}

export type ProjectActionTypes = SetProjectAction;

export interface ProjectState {
    projectName: string;
}