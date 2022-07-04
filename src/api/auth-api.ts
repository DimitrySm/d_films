import { UserType } from "../redux/reducers/userReducer";
import BaseInstance from "./api";

type AuthDataType = {
    email: string,
    password: string  
}

type AuthResponseDataType = {
    token: string,
    user: UserType  
}

const instance: any = new BaseInstance();

class AuthApi {
    static register = async (data: AuthDataType): Promise<AuthResponseDataType> => {
        const response = await instance.post('auth/registration', data);
        return response.data;
    };

    static login = async (data: AuthDataType): Promise<AuthResponseDataType> => {
        const response = await instance.post('auth/login', data);
        return response.data;
    };
}

export default AuthApi;