import { FilmsActionsType, filmsEnum } from "../actions/types/films";

export type FilmType = {
    id: number;
    title: string;
    year: string;
    runtime: string;
    genres: string[];
    director: string;
    actors: string;
    plot: string;
    posterUrl: string;
}

type FilmsReducerType = {
    films: FilmType[],
    currentFilm: FilmType | null
}

const initialValue: FilmsReducerType = {
    films: [],
    currentFilm: null
};

export const filmsReducer = (state = initialValue, action: FilmsActionsType): FilmsReducerType => {
    switch (action.type) {
        case filmsEnum.SET_FILMS:
            return {
                ...state,
                films: [...action.films]
            };
        case filmsEnum.SET_CURRENT_FILM:
            return {
                ...state,
                currentFilm: action.film
            };
        default:
            return state;
    }
};