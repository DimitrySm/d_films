import { UserType } from '../reducers/userReducer';
import { IAppState } from '../store';

export const userSelector = (state: IAppState): UserType | null=> state.userReducer.user;