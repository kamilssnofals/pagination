import axios from 'axios'
import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import Pagination from './components/Pagination'

const App = () => {
		const apiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/images'

		const [countries,setCountries] = useState([])
		const [loading,setLoading] = useState(false)
		const [currentPage,setCurrentPage] = useState(1)
		const [currentParePage] = useState(10)




		const getAllCountries = async () => {
			try {
				setLoading(true)
				const res = await axios.get(apiUrl)
				setCountries(res.data.data)
				console.log(res.data.data);
				setLoading(false)
			} catch (error) {
				console.error(error);
			}
		}


		const lastCountriesIndex = currentPage * currentParePage
		const firstCountriesIndex = lastCountriesIndex - currentParePage
		const currentCountries = countries.slice(firstCountriesIndex,lastCountriesIndex)

		const paginate = numberPaginate => setCurrentPage(numberPaginate)
		const prevPage = () => setCurrentPage(prev => prev -1)
		const nextPage = () => setCurrentPage(prev => prev + 1)

		useEffect(() => {
			getAllCountries()
		},[])
	return (
		<div>
			<h1 className=' flex justify-center font-medium text-rose-600 text-2xl pt-2 font-[lora] italic underline cursor-pointer'>
				Pagination
			</h1>
			<Countries countries={currentCountries} loading={loading} />
			<Pagination
				currentParePage={currentParePage}
				totalCountry={countries.length}
				paginate={paginate}
			/>

			<div className=' flex justify-center mt-3'>
				<button
					disabled={currentPage === 1}
					onClick={prevPage}
					className=' border-2 border-slate-300 px-2 mx-1 bg-cyan-400'
				>
					PrevPage
				</button>
				<button
					disabled={
						currentPage === Math.ceil(countries.length / currentParePage)
					}
					onClick={nextPage}
					className=' border-2 border-slate-300 px-2 mx-1 bg-cyan-400'
				>
					NextPage
				</button>
			</div>
		</div>
	)
}
export default App