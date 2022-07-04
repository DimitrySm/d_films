import { UserActionsType, userEnum } from "../actions/types";

export type UserType = {
    email: string;
    id: number;
    
}

type UserReducerType = {
    user: UserType | null
}

const initialValue: UserReducerType = {
    user: null,
};

export const userReducer = (state = initialValue, action: UserActionsType): UserReducerType => {
    switch (action.type) {
        case userEnum.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};