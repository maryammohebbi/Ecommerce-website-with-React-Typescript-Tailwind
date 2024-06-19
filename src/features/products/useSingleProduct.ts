import { useQuery } from "@tanstack/react-query";
import { getProductApi } from "../services/productService";
import { useParams } from "react-router-dom";
import type { Product } from "./useProducts";
import { AxiosResponse } from "axios";


export default function useSingleProduct(): {
    isSingleProductLoading: boolean
    product: Product | undefined
} {
    const { id } = useParams()

    const { isLoading: isSingleProductLoading, data: productResponse } = useQuery<AxiosResponse<Product>>({
        queryKey: ["product", id],
        queryFn: () => getProductApi(Number(id)),
    })

    const product = productResponse?.data

    return { isSingleProductLoading, product }
}