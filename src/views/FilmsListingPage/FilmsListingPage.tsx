import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilmCard } from '../../components/FilmCard/FilmCard'
import { setCurrentFilm } from '../../redux/actions/films';
import { FilmType } from '../../redux/reducers/filmsReducer';
import { filmsSelector } from '../../redux/selectors/films'
import { setFilmsTC } from '../../redux/thunk'

export const FilmsListingPage = () => {
  const films = useSelector(filmsSelector);

  const dispatch = useDispatch<any>();
  
  useEffect(() => {
    dispatch(setFilmsTC());
  }, [dispatch])

  const onFilmClick = (film: FilmType) => {
    dispatch(setCurrentFilm(film))
  }

  const renderFilms = () => {
    return films.map(film => <FilmCard key={film.id} film={film} onClick={onFilmClick}/>)
  }
  
  return (
    <div className="container">
      <div className="d-flex justify-content-around flex-wrap">
        {renderFilms()}
      </div>
    </div>
  )
}
