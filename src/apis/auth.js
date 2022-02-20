import fetchAPI from './'

export const obtainTokenAPI = async (data) => {
    return await fetchAPI.post('/auth/token/obtain/', data, { version: 1 })
}