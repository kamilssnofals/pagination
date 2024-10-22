const Pagination = ({ currentParePage, totalCountry, paginate }) => {
	const numberPage = []
	for (let i = 1; i <= Math.ceil(totalCountry / currentParePage); i++) {
		numberPage.push(i)
	}
	return (
		<div className=' flex justify-center'>
			<div>
				{numberPage.map(number => (
					<button
						className=' mx-2  my-3 border-2 border-slate-300 px-2 bg-teal-300 text-rose-600'
						key={number}
						onClick={() => paginate(number)}
					>
						{number}
					</button>
				))}
			</div>
		</div>
	)
}
export default Pagination