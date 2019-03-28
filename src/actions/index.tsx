import { SET_PROJECT } from "../constants/types";

export function setProject(projectName: string) {
    return {
        type: SET_PROJECT,
        data: projectName
    }
}