import { FilmType } from '../reducers/filmsReducer';
import { IAppState } from '../store';

export const filmsSelector = (state: IAppState): FilmType[] => state.filmsReducer.films;
export const curentFilmSelector = (state: IAppState): FilmType | null=> state.filmsReducer.currentFilm;