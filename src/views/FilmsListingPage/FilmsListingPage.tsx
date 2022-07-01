import React from 'react'
import { FilmCard } from '../../components/FilmCard/FilmCard'
import { filmsMockData } from '../../config/filmsMockData'

export const FilmsListingPage = () => {

  const renderFilms = () => {
    return filmsMockData.map(film => <FilmCard key={film.id} film={film}/>)
  }
  
  return (
    <div className="container">
      <div className="d-flex justify-content-around flex-wrap">
        {renderFilms()}
      </div>
    </div>
  )
}
