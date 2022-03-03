import { combineReducers } from "redux";

const USER_INITIAL_STATE = {
    isAuthenticated: false,
}

const user = (state = USER_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload, isAuthenticated: true, };
        case 'LOGOUT':
            return USER_INITIAL_STATE
        default:
            return state
    }
}

const organizations = (state = {
    active: null,
    list: [],
}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_ORGANIZATION':
            return { ...state, active: action.payload };
        case 'SET_ORGANIZATIONS':
            return { ...state, list: action.payload };
        default:
            return state
    }
}

export default combineReducers({
    organizations,
    user,
})