import { BASE_URL } from "../constants/api";

/**
 * 
 * @param {Object} obj Object to be validated against the schema
 * @param {any} schema Schema to validate against
 * @returns {value: *, error: Object[], isInvalid: boolean}
 */
export const schemaValidator = (obj, schema) => {
    const { value, error: rawError } = schema.validate(obj, { abortEarly: false });
    let error = {};

    if (rawError) {
        error = rawError.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message.replace(`"${curr.path[0]}"`, "This field");
            return acc;
        }, {})
    }

    return {
        value,
        error,
        isInvalid: !!rawError
    }
}

/**
 * 
 * @param {string} token Token to be parsed
 * @returns the decoded token
 */
export const decodeJWT = (token) => {
    if (!token) {
        return null;
    }

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


/**
 * 
 * @param {string} src Image url
 * @returns full image url with the scheme (http/https)
 */
export const getImageURL = (src) => {
    if (!src) return src
    if (src.startsWith('http')) {
        return src;
    }

    return `${BASE_URL}${src}`;
}