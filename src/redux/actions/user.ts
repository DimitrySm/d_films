import { UserType } from "../reducers/userReducer";
import { SetUserAT, userEnum } from "./types";

export const setUser = (user: UserType | null): SetUserAT => ({
    type: userEnum.SET_USER,
    user,
});