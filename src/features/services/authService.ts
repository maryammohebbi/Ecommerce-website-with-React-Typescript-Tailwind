import http from "./httpService";

interface LoginDataTypes {
    userName: string
    password: string
}
interface LoginResponse {
    token: string
    userId: number
}
export interface User {
    id: number;
    email: string;
    username: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}

export async function getLoginInfo(data: LoginDataTypes): Promise<LoginResponse> {
    try {
        const response = await http.post<LoginResponse>('/auth/login', {
            username: data.userName,
            password: data.password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}


export async function getUser(userId: number): Promise<User> {
    try {
        const response = await http.get<User>(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Get user error:', error);
        throw error;
    }
}