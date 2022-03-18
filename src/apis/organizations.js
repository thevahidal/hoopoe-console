import fetchAPI from './'

export const PAGINATION_LIMIT_SIZE = 20

/**
 * @param {string} uuid - Organization uuid
 * 
 * returns a list of all organizations
 */
export const listOrganizationsAPI = async () => {
    return await fetchAPI.get('/organizations/')
}

/**
 * @param {string} uuid - Organization uuid
 * @param {string} page - Page number
 * 
 * returns upupas from a specific organization
 */
export const listUpupasAPI = async (uuid, page) => {
    let url = `/organizations/${uuid}/upupa/`

    if (page) {
        const offset = (page - 1) * PAGINATION_LIMIT_SIZE

        url += `?limit=${PAGINATION_LIMIT_SIZE}&offset=${offset}`
    }

    return await fetchAPI.get(url)
}

/**
 * @param {string} uuid - Upupa uuid
 * 
 * returns upupa details
 */
export const retrieveUpupaAPI = async (uuid) => {
    return await fetchAPI.get(`/upupa/${uuid}/`)
}

/**
 * @param {string} uuid - Organization uuid
 * 
 * returns a list of all recipients of an organization
 */
export const listRecipientsAPI = async (uuid) => {
    return await fetchAPI.get(`/organizations/${uuid}/recipients/`)
}

/**
 * @param {string} uuid - Organization uuid
 * 
 * creates a recipient for an organization
 */
export const createRecipientAPI = async (uuid, data) => {
    return await fetchAPI.post(`/organizations/${uuid}/recipients/`, data)
}

/**
 * @param {string} uuid - Organization uuid
 * 
 * updates a recipient
 */
export const updateRecipientAPI = async (uuid, data) => {
    return await fetchAPI.patch(`/organizations/${uuid}/recipients/`, data)
}