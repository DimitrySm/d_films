import BaseInstance from "./api";

const instance: any = new BaseInstance();

class UserApi {
    static userProfile = async (): Promise<any> => {
        const response = await instance.get('users/profile');
        return response.data;
    };
}

export default UserApi;