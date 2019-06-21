import { NavbarLinkActionTypes, ADD_LINK, REMOVE_LINK, NavbarState } from "../constants/types";
import { navbarLinks } from "../constants";

const initialState: NavbarState = {
    links: [
        navbarLinks[0]
    ]
};

function navbarReducer(state = initialState, action: NavbarLinkActionTypes): NavbarState {
    switch (action.type) {
        case ADD_LINK:
            if (!state.links.find(item => item.value === action.data.value)) {
                return {
                    ...state,
                    links: [...state.links, action.data]
                };
            } else {
                return state;
            }
        case REMOVE_LINK:
        if (!state.links.find(item => item.name === action.data.name)) {
            return state;
        } else {
            return {
                ...state,
                links: state.links.filter(link => link.value !== action.data.value)
            };
        }
        default:
            return state;
    }
}

export default navbarReducer;