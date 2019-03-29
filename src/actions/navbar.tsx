import { ADD_LINK, REMOVE_LINK, NavbarLink } from '../constants/types';

export function addLink(link: NavbarLink) {
    return {
        type: ADD_LINK,
        data: link
    }
}

export function removeLink(link: NavbarLink) {
    return {
        type: REMOVE_LINK,
        data: link
    }
}