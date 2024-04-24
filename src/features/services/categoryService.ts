import http from "./httpService";

export function getAllCategoryApi() {
    return http.get("/products/categories")
}