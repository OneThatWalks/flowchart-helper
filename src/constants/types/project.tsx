export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const ADD_REQUIREMENT = 'ADD_REQUIREMENT';
export const REMOVE_REQUIREMENT = 'REMOVE_REQUIREMENT';

interface SetProjectAction {
    type: typeof SET_PROJECT_NAME;
    data: string;
}

interface AddRequirementAction {
    type: typeof ADD_REQUIREMENT;
    data: string;
}

interface RemoveRequirementAction {
    type: typeof REMOVE_REQUIREMENT;
    data: {
        requirement: string,
        index: number
    };
}

export type ProjectActionTypes = SetProjectAction | AddRequirementAction | RemoveRequirementAction;

export interface ProjectState {
    /**
     * Name of the project
     */
    projectName: string;

    /**
     * Project requirements
     */
    requirements: string[];
}