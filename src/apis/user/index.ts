import apiInstance from '../instance'
export default function useUserApi() {
    const login = async (params) => apiInstance.post('/')

    const login2 = async (params) => apiInstance.post('/')


    return {
        login
    }
}