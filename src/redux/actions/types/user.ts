import { UserType } from "../../reducers/userReducer";

export enum userEnum {
    SET_USER = 'setUser',
}

export type SetUserAT = {
    type: userEnum.SET_USER;
    user: UserType | null;
}

export type UserActionsType = SetUserAT;