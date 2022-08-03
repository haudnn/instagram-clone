
import axiosClient from "./axiosClient";
const authApi = {
    register(){
        const url ='/auth/register'
        return axiosClient.post(url)
    }
}
export default authApi;