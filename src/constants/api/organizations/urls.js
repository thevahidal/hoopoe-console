
export default {
    listOrganizationsAPI: '/organizations/',
    listUpupasAPI: (uuid) => `/organizations/${uuid}/upupa/`,
    retrieveUpupaAPI: (uuid) => `/upupa/${uuid}/`,
    listRecipientsAPI: (uuid) => `/organizations/${uuid}/recipients/`,
    createRecipientAPI: (uuid) => `/organizations/${uuid}/recipients/`,
    updateRecipientAPI: (uuid) => `/organizations/${uuid}/recipients/`,
}