const Countries = ({ countries,loading }) => {

  if(loading) {
    <h2>Loading...</h2>
  }

	return <div>
      <ul>
        {
          countries.map((country,id) => (
            <li key={id} className=' flex border-2 border-slate-400 m-2 p-2 hover:text-lime-500 duration-500 transition-colors cursor-pointer shadow-lg shadow-rose-300'>
              {country.name}
              <img src={country.flag} alt="flag" className='w-6 ml-2'/>
            </li>
          ))
        }
      </ul>
  </div>
}
export default Countries