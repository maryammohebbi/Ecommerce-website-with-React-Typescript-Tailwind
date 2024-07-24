import { AxiosResponse } from "axios";
import http from "./httpService";

export function getCartsApi(): Promise<AxiosResponse> {
    return http.get("/carts")
}