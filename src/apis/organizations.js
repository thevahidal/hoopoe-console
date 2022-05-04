import urls from '../constants/api/organizations/urls'
import fetchAPI from './'

export const PAGINATION_LIMIT_SIZE = 20

/**
 * @param {string} uuid - Organization uuid
 * 
 * returns a list of all organizations
 */
export const listOrganizationsAPI = () => {
    return fetchAPI.get(urls.listOrganizationsAPI)
}

/**
 * @param {string} uuid - Organization uuid
 * @param {string} page - Page number
 * 
 * returns upupas from a specific organization
 */
export const listUpupasAPI = (uuid, page) => {
    let url = urls.listUpupasAPI(uuid)

    if (page) {
        const offset = (page - 1) * PAGINATION_LIMIT_SIZE

        url += `?limit=${PAGINATION_LIMIT_SIZE}&offset=${offset}`
    }

    return fetchAPI.get(url)
}

/**
 * @param {string} uuid - Upupa uuid
 * 
 * returns upupa details
 */
export const retrieveUpupaAPI = (uuid) => {
    return fetchAPI.get(urls.retrieveUpupaAPI(uuid))
}

/**
 * @param {string} uuid - Organization uuid
 * 
 * returns a list of all recipients of an organization
 */
export const listRecipientsAPI = (uuid) => {
    return fetchAPI.get(urls.listRecipientsAPI(uuid))
}

/**
 * @param {string} uuid - Organization uuid
 * 
 * creates a recipient for an organization
 */
export const createRecipientAPI = (uuid, data) => {
    return fetchAPI.post(urls.createRecipientAPI(uuid), data)
}

/**
 * @param {string} uuid - Organization uuid
 * 
 * updates a recipient
 */
export const updateRecipientAPI = (uuid, data) => {
    return fetchAPI.patch(urls.updateRecipientAPI(uuid), data)
}