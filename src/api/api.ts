import axios from "axios";
import Cookies from "js-cookie";

export default class Axios {
    constructor() {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5000/",
        });
        axiosInstance.interceptors.request.use(
            (config) => {
                if (config.headers) {
                    config.headers.Authorization = Cookies.get("Authorization") as string;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        return axiosInstance;
    }
}
