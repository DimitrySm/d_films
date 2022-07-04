import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilmsApi from '../../api/films-api';
import { FilmCard } from '../../components/FilmCard/FilmCard'
import { Pagination } from '../../components/Paginations/Paginations';
import { setCurrentFilm, setFilms } from '../../redux/actions/films';
import { FilmType } from '../../redux/reducers/filmsReducer';
import { filmsSelector } from '../../redux/selectors/films'

export const FilmsListingPage = () => {
	const films = useSelector(filmsSelector);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const params = {
					page: currentPage,
					size: 12
				}
				const response = await FilmsApi.getFilms(params)
				setTotalPages(response.totalPages)
				dispatch(setFilms(response.films))
			} catch (error) {
				console.log(error);
			}
		})()
	}, [dispatch, currentPage])

	const onFilmClick = (film: FilmType) => dispatch(setCurrentFilm(film))

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const renderFilms = () => {
		return films.map(film => <FilmCard key={film.id} film={film} onClick={onFilmClick} />)
	}

	return (
		<div className="container">
			<div className="d-flex justify-content-around flex-wrap">
				{renderFilms()}
			</div>
			<div className="d-flex justify-content-center mt-4">
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					paginate={paginate}
				/>
			</div>
		</div>
	)
}
