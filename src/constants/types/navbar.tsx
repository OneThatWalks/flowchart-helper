import { NavbarLink } from ".";

export const ADD_LINK = 'ADD_LINK';
export const REMOVE_LINK = 'REMOVE_LINK';

interface AddLinkAction {
    type: typeof ADD_LINK,
    data: NavbarLink;
}

interface RemoveLinkAction {
    type: typeof REMOVE_LINK,
    data: NavbarLink;
}

export type NavbarLinkActionTypes = AddLinkAction & RemoveLinkAction;

export interface NavbarState {
    links: Array<NavbarLink>;
}