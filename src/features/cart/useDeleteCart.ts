import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartApi } from "../services/cartService";
import toast from "react-hot-toast";

interface DeleteCartReturn {
    deleteCart: (cartId: number) => void
    isDeleting: boolean
}
export default function useDeleteCart(): DeleteCartReturn {
    const queryClient = useQueryClient()

    const { mutate: deleteCart, isPending: isDeleting } = useMutation({
        mutationFn: deleteCartApi,
        onSuccess: () => {
            toast.success("Cart deleted.")

            queryClient.invalidateQueries({
                queryKey: ["carts"]
            })
        },
        onError: () => toast.error("Deleting cart failed.")
    })

    return { deleteCart, isDeleting }
}