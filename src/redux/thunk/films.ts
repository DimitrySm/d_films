import { Dispatch } from 'redux';
import { filmsMockData } from '../../config/filmsMockData';
import { setFilms } from '../actions/films';


export const setFilmsTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setFilms(filmsMockData));
    };
};