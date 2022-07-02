
import Cookies from 'js-cookie';

export async function setToken(token: string): Promise<void> {
    try {
        Cookies.set(
            "Authorization",
            `Bearer ${token}`
        );
    } catch (error) {
        console.log(error);
    }
}

export async function getToken(): Promise<string | undefined> {
    return Cookies.get("Authorization");
}
