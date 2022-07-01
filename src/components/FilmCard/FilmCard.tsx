import React from 'react'
import { Link } from 'react-router-dom'
import { FilmType } from '../../redux/reducers/filmsReducer'
import s from './FilmCard.module.css'

type FilmCardPropsType = {
  film: FilmType,
  onClick: (film: FilmType) => void
}

export const FilmCard = (props: FilmCardPropsType) => {
  const {
    id,
    title,
    genres,
    posterUrl
  } = props.film

  return (
    <Link
      className={s.movie}
      to={`/film/${id}`}
      onClick={() => props.onClick(props.film)}
    >
      <div className={s.movieCoverInner}>
        <img
          src={posterUrl}
          className={s.movieCover}
          alt=""
        />
        <div className={s.movieCoverDarkened}></div>
      </div>
      <div className={s.movienfo}>
        <div className={s.movieTitle}>{title}</div>
        <div className={s.movieCategory}>
          {genres.map(genre => genre + ' ')}
        </div>
      </div>
    </Link>
  )
}
