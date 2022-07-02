import BaseInstance from "./api";

type AuthDataType = {
    email: string,
    password: string  
}
const instance: any = new BaseInstance();

class AuthApi {
    static register = async (data: AuthDataType): Promise<string> => {
        const response = await instance.post('auth/registration', data);
        return response.data.token;
    };

    static login = async (data: AuthDataType): Promise<string> => {
        const response = await instance.post('auth/login', data);
        return response.data.token;
    };
}

export default AuthApi;