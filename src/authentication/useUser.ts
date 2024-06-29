import { useQuery } from "@tanstack/react-query";
import { getUser } from "../features/services/authService";
import { AxiosResponse } from "axios";

interface User {
    address: {
        geolocation: {
            lat: number
            long: number
        }
        city: string
        street: string
        number: number
        zipcode: number
    }
    id: number
    email: string
    username: string
    password: "m38rmF$",
    name: {
        firstname: string
        lastname: string
    }
    phone: number
    __v: number
}

export default function useUser(): {
    isUserLoading: boolean
    user: User | undefined
} {
    const { isLoading: isUserLoading, data: userResponse } = useQuery<AxiosResponse<User>>({
        queryFn:()=> getUser(data),
        queryKey: ["get-user"],
        retry: false
    })

    const user = userResponse?.data

    return { user, isUserLoading }
}