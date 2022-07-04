import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FilmsApi from '../../api/films-api'
import { DescriptionBlock } from '../../components/DescriptionBlock/DescriptionBlock'
import { setCurrentFilm } from '../../redux/actions/films'
import { curentFilmSelector } from '../../redux/selectors/films'
import s from './FilmPage.module.css'

export const FilmPage = () => {
	const film = useSelector(curentFilmSelector);
	let { id } = useParams();
	const dispatch = useDispatch();
	
	useEffect(() => {
		(async () => {
			if (id) {
				try {
					const response = await FilmsApi.getFilm(id)
					dispatch(setCurrentFilm(response))
				} catch (error) {
					console.log(error);
				}
			}
		})()
	}, [])


	const renderDescription = () => {
		return Object.entries(film ?? {}).map((element, index) => {
			if (
				element[0] !== 'id'
				&& element[0] !== 'posterUrl'
				&& element[0] !== 'createdAt'
				&& element[0] !== 'updatedAt'
			) {
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
