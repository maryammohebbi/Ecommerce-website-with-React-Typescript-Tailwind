import { AxiosResponse } from "axios";
import http from "./httpService";

export function getAllCategoryApi(): Promise<AxiosResponse<string[]>> {
    return http.get("/products/categories")
}