import React from 'react'
import { FilmType } from '../../config/filmsMockData'
import s from './FilmCard.module.css'

type FilmCardPropsType = {
  film: FilmType
}

export const FilmCard = (props: FilmCardPropsType) => {
  const {
    title,
    genres,
    posterUrl
  } = props.film

  return (
    <div className={s.movie}>
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
    </div>
  )
}
