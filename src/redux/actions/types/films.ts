import { FilmType } from "../../reducers/filmsReducer";

export enum filmsEnum {
    SET_FILMS = 'setFilms',
    SET_CURRENT_FILM = 'setCurrentFilm'
}

export type SetFilmsAT = {
    type: filmsEnum.SET_FILMS;
    films: FilmType[];
}

export type SetCurrentFilmAT = {
    type: filmsEnum.SET_CURRENT_FILM;
    film: FilmType;
}

export type FilmsActionsType = SetFilmsAT | SetCurrentFilmAT;