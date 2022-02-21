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

export default combineReducers({
    user,
})