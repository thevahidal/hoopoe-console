import fetchAPI from './'
import urls from '../constants/api/auth/urls'

/**
 * @api {post} /auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Login to the application
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * 
 * return a promise containing the api response and the access and refresh token in case of success
 * @param   {Object} data - the data to send to the api
 * @param   {string} data.username - User's username
 * @param   {string} data.password - User's password
 */
export const obtainTokenAPI = (data) => {
    console.log(data)
    return fetchAPI.post(urls.obtainTokenAPI, data, { version: 1 })
}

/**
 * @api {post} /auth/token/refresh/ Refresh token
 * @apiName Refresh token
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Refresh the token
 * @apiParam {String} refresh Refresh token
 * 
 * return a promise containing the api response and the access token in case of success
 * @param   {Object} data - the data to send to the api
 * @param   {string} data.refresh - User's refresh token
 */
export const refreshTokenAPI = (data) => {
    return fetchAPI.post(urls.refreshTokenAPI, data, { version: 1 })
}

/**
 * @api {post} /auth/register Register
 * @apiName Register
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Register to the application
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * @apiParam {String} password2 Password confirmation
 * 
 * return a promise containing the api response and the access and refresh token in case of success
 * @param   {Object} data - the data to send to the api
 * @param   {string} data.username - User's username
 * @param   {string} data.email - User's email address
 * @param   {string} data.password - User's password
 */
export const registerAPI = (data) => {
    return fetchAPI.post(urls.registerAPI, data, { version: 1 })
}