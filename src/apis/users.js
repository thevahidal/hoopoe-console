import fetchAPI from './'

export const organizationsAPI = async () => {
    return await fetchAPI.get('/organizations/')
}