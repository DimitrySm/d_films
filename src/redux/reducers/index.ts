import { combineReducers } from 'redux';

import { filmsReducer } from './filmsReducer';
import { userReducer } from './userReducer';


export const combineReducer = combineReducers({
    filmsReducer,
    userReducer,
});
