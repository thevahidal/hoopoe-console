import { API_BASE_URL } from "../constants/api";


export const getAPICompleteURL = (url, version) => {
    return `${API_BASE_URL}/v${version}${url}`;
}