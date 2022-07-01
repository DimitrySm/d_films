import { FilmType } from "../reducers/filmsReducer";
import { filmsEnum, SetCurrentFilmAT, SetFilmsAT } from "./types/films";

export const setFilms = (films: FilmType[]): SetFilmsAT => ({
    type: filmsEnum.SET_FILMS,
    films,
});

export const setCurrentFilm = (film: FilmType): SetCurrentFilmAT => ({
    type: filmsEnum.SET_CURRENT_FILM,
    film,
});