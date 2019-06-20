import { SET_PROJECT_NAME, ProjectActionTypes, ADD_REQUIREMENT, REMOVE_REQUIREMENT } from "../constants/types";

export function setProjectName(projectName: string): ProjectActionTypes {
    return {
        type: SET_PROJECT_NAME,
        data: projectName
    }
}

export function addRequirement(requirement: string): ProjectActionTypes {
    return {
        type: ADD_REQUIREMENT,
        data: requirement
    }
}

export function removeRequirement(requirement: string, index: number): ProjectActionTypes {
    return {
        type: REMOVE_REQUIREMENT,
        data: {
            requirement: requirement,
            index: index
        }
    }
}