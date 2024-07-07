import { AxiosResponse } from "axios";
import http from "./httpService";

interface LoginDataTypes {
    email: string
    password: string
}

export function getLoginInfo(data: LoginDataTypes): Promise<AxiosResponse> {
    return http.post("/auth/login", data)
}