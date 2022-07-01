import React from 'react'
import { useSelector } from 'react-redux'
import { DescriptionBlock } from '../../components/DescriptionBlock/DescriptionBlock'
import { curentFilmSelector } from '../../redux/selectors/films'
import s from './FilmPage.module.css'

export const FilmPage = () => {
  const film = useSelector(curentFilmSelector);

  const renderDescription = () => {
    return Object.entries(film ?? {}).map((element, index) => {
      if (element[0] !== 'id' && element[0] !== 'posterUrl') {
        return <DescriptionBlock title={element[0]} value={element[1].toString()} key={index} />
      }

      return []
    });
  }

  return (
    <div className={s.wrapper}>
      {film && <img src={film.posterUrl} alt={film.title} className={s.image} />}
      {renderDescription()}
    </div>
  )
}
