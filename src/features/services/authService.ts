import { AxiosResponse } from "axios";
import http from "./httpService";

// export function getUser(data: object): Promise<AxiosResponse> {
//     return http.get("/users", data)
// }

export function getLoginInfo(): Promise<AxiosResponse> {
    return http.post("/users")
}