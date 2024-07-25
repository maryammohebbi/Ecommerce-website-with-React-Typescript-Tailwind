import { AxiosResponse } from "axios";
import http from "./httpService";
import type { Cart } from "../cart/useCarts";

export function getCartsApi(): Promise<AxiosResponse<Cart[]>> {
    return http.get("/carts")
}

export function deleteCartApi(cartId: number): Promise<AxiosResponse<void>> {
    return http.delete(`/carts/${cartId}`)
}