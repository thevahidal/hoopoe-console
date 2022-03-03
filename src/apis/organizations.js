import fetchAPI from './'


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
    return await fetchAPI.get(`/organizations/${uuid}/upupa/`)
}

/**
 * @param {string} uuid - Upupa uuid
 * 
 * returns upupa details
 */
export const retrieveUpupaAPI = async (uuid) => {
    return await fetchAPI.get(`/upupa/${uuid}/`)
}