// import { AxiosResponse } from "axios";
import http from "./httpService";

interface LoginDataTypes {
    userName: string
    password: string
}

interface LoginResponse {
    token: string
}

export async function getLoginInfo(data: LoginDataTypes): Promise<LoginResponse> {
    try {
        // console.log("Login data:", data); // Debug log

        const response = await http.post<LoginResponse>("/auth/login", {
            username: data.userName,
            password: data.password,
        })
        // console.log("API response:", response); // Debug log
        return response.data;
    } catch (error) {
        // console.error("Login error:", error); // Debug log
        throw error; // Re-throw the error for handling in Login.tsx
    }
}
