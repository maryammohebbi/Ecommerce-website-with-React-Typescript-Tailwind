// import { AxiosResponse } from "axios";
import http from "./httpService";

interface LoginDataTypes {
    userName: string
    password: string
}

export function getLoginInfo(data: LoginDataTypes): Promise<{ token: string }> {
    return http.post("/auth/login", data)
}