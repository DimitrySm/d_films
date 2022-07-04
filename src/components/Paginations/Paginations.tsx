type PaginationPropsType = {
	totalPages: number,
	paginate: (pageNumber: number) => void,
	currentPage: number,
}

export const Pagination = (props: PaginationPropsType) => {
	const { totalPages, paginate, currentPage } = props;
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li key={number} className={`page-item ${currentPage === number && 'active'}`}>
						<div onClick={() => paginate(number)} className='page-link' role="button">
							{number}
						</div>
					</li>
				))}
			</ul>
		</nav>
	);
};