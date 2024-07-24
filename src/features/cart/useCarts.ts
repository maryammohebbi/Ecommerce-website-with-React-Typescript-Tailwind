import { useQuery } from "@tanstack/react-query";
import { getCartsApi } from "../services/cartService";
import { AxiosResponse } from "axios";

interface Cart {
    id: number
    userId: number
    date: string
    products: [

        {
            productId: number
            quantity: number
        }
    ]
    __v: number
}

type Carts = Cart[]

export default function useCarts(): {
    isCartsLoading: boolean
    carts: Carts | undefined
} {
    const { data: cartsResponse, isLoading: isCartsLoading } = useQuery<AxiosResponse<Carts>>({
        queryFn: getCartsApi,
        queryKey: ["carts"]
    })

    const carts = cartsResponse?.data

    return { carts, isCartsLoading }
}