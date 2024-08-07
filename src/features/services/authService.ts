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
export interface SingUpUser {
    email: string
    userName: string
    password: string
    phone: string
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

export async function signUpUserApi(data: SingUpUser): Promise<SingUpUser> {
    const response = await http.post<SingUpUser>("/users", data)
    return response.data
}

export async function updateUserApi(userId: number, data: User): Promise<User> {
    return await http.patch(`/users/${userId}`, data)
}