import { AxiosResponse } from 'axios';
import http from "./httpService";

export function getAllProductsApi(): Promise<AxiosResponse<[]>> {
    return http.get("/products")
}