import Cookies from "js-cookie"
import { Dispatch } from "redux"
import UserApi from "../../api/user-api"
import { setUser } from "../actions/user"

export const setAuthUserTC = () => {
    return async (dispatch: Dispatch) => {
        if (Cookies.get("Authorization")) {
            try {
                const response = await UserApi.userProfile()
                dispatch(setUser({email: response.email}))
            } catch (error) {
                console.log(error);
            }
        } else {
            dispatch(setUser(null))
        }
    }
}