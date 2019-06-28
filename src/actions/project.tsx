import { SET_PROJECT_NAME, ProjectActionTypes, ADD_REQUIREMENT, REMOVE_REQUIREMENT, Requirement, AddRequirementAction, RemoveRequirementAction, SetProjectAction } from "../constants/types";

export function setProjectName(projectName: string): SetProjectAction {
    return {
        type: SET_PROJECT_NAME,
        data: projectName
    };
}

export function addRequirement(requirement: Requirement): AddRequirementAction {
    return {
        type: ADD_REQUIREMENT,
        data: requirement
    };
}

export function removeRequirement(requirement: Requirement): RemoveRequirementAction {
    return {
        type: REMOVE_REQUIREMENT,
        data: requirement
    };
}