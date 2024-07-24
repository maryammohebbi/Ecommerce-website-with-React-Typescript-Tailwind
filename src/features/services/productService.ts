import { AxiosResponse } from 'axios';
import http from "./httpService";

export async function getAllProductsApi(): Promise<AxiosResponse<[]>> {
    return await http.get("/products")
}

export async function getProductApi(id: number): Promise<AxiosResponse> {
    return await http.get(`/products/${id}`)
}