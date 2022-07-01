import { combineReducers } from 'redux';

import { filmsReducer } from './filmsReducer';


export const combineReducer = combineReducers({
    filmsReducer,
});
