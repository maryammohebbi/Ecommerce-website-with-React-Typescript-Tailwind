import { AxiosResponse } from 'axios';
import http from "./httpService";

export function getAllProductsApi(): Promise<AxiosResponse<[]>> {
    return http.get("/products")
}

export function getProductApi(id: number): Promise<AxiosResponse> {
    return http.get(`/products/${id}`)
}