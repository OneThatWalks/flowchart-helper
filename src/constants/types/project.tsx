export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';

interface SetProjectAction {
    type: typeof SET_PROJECT_NAME;
    data: string;
}

export type ProjectActionTypes = SetProjectAction;

export interface ProjectState {
    projectName: string;
}