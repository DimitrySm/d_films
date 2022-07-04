import { FilmType } from "../redux/reducers/filmsReducer";
import BaseInstance from "./api";

export type FilmsParamsType = {
    page: number,
    size: number,
}

type GetFilmsResponseType = {
    films: FilmType[],
    totalPages: number,
}

const instance: any = new BaseInstance();

class FilmsApi {
    static getFilms = async (params: FilmsParamsType): Promise<GetFilmsResponseType> => {
        const response = await instance.get('films/', { params });
        return response.data;
    };
}

export default FilmsApi;