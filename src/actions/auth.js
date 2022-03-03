// @ts-check

import { decodeJWT } from "../utils";

/**
 * Dispatches the action to log in the user with the given tokens
 * @param   {string} access  Access token of the User
 * @param   {string} refresh   Refresh token of the User
 */
export const login = (access, refresh) => (dispatch) => {
    dispatch({
        type: 'LOGIN',
        payload: {
            access,
            refresh,
            info: decodeJWT(access).user,
        },
    });
}

export const logout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT',
    });
}