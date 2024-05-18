import axios, { Axios, AxiosInstance } from "axios"


const BASE_URL = "https://fakestoreapi.com"
const app: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

interface Http {
    get: Axios["get"];
    post: Axios["post"];
    delete: Axios["delete"];
    put: Axios["put"];
    patch: Axios["patch"];
}

const http: Http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch,
}


export default http
