import { debounce } from 'lodash';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilmsApi from '../../api/films-api';
import { FilmCard } from '../../components/FilmCard/FilmCard'
import { Pagination } from '../../components/Paginations/Paginations';
import { setCurrentFilm, setFilms } from '../../redux/actions/films';
import { FilmType } from '../../redux/reducers/filmsReducer';
import { filmsSelector } from '../../redux/selectors/films'

const PAGE_SIZE = 12

export const FilmsListingPage = () => {
	const films = useSelector(filmsSelector);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [searchString, setSearchString] = useState<string>('')

	const dispatch = useDispatch();

	const getFilms = async (search?: string) => {
		const params = {
			page: currentPage,
			size: PAGE_SIZE,
			search
		}
		const response = await FilmsApi.getFilms(params)
		setTotalPages(response.totalPages)
		dispatch(setFilms(response.films))
	}

	useEffect(() => {
		(async () => {
			try {
				await getFilms()
			} catch (error) {
				console.log(error);
			}
		})()
	}, [dispatch, currentPage])

	const onFilmClick = (film: FilmType) => dispatch(setCurrentFilm(film))

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const debouncedSearch = debounce(async (search) => {
		try {
			await getFilms(search)
		} catch (error) {
			console.log(error);
		}
	}, 500);

	async function onSearchChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchString(e.target.value)
		debouncedSearch(e.target.value);
	}

	const renderFilms = () => {
		return films.map(film => <FilmCard key={film.id} film={film} onClick={onFilmClick} />)
	}

	return (
		<div className="container">
			<div className="d-flex justify-content-center mb-4">
				<input
					className="form-control"
					placeholder="Search by title, director or actors"
					value={searchString}
					onChange={onSearchChangeHandler}
				/>
			</div>
			<div className="d-flex justify-content-around flex-wrap">
				{
					films.length
						? renderFilms()
						: <p className="text-white">No results found</p>
				}
			</div>
			<div className="d-flex justify-content-center mt-4">
				{!searchString && (
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						paginate={paginate}
					/>
				)}
			</div>
		</div>
	)
}
