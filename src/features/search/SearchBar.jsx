import { useState } from "react";
import Button from "../../ui/Button";
import { getCoordsByName } from "../../services/apiGeocoding";
import { getPosition, getWeather, updateCity } from "./searchSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast'
function SearchBar() {
  const [query, setQuery] = useState("");
  const [numDays, setNumDays] = useState('');
  
  const dispatch = useDispatch();
  function handleClick() {
    if (!(numDays === '3' || numDays === '7' || numDays === '14')) {
      toast.error('You have to choose number of days')
      return
    };
    const type = 'auto'

    getPosition().then(data=>{
      const position = {
        lat: data.coords.latitude,
        lon: data.coords.longitude
      }
      dispatch(getWeather({ ...position, numDays, type }))
    })
    
      
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!(numDays === '3' || numDays === '7' || numDays === '14')) {
      toast.error('You have to choose number of days')
      return
    };
    if (query.length <= 3) {
      toast.error('Are You sure it\'s correct name for the city?')
      return
    }

    dispatch(updateCity(query));

    
    getCoordsByName(query).then((data) =>
      dispatch(getWeather({ ...data, numDays })),
    );
    setQuery("");
  }

  return (
    <div className="flex items-center justify-center bg-slate-300 ">
      <Button type='icon' onClick={handleClick}><img className="p-1 md:p-2" src="/src/static/localize_me.png" alt="Pin to localizing user position" /></Button>
      <form className="ml-4" onSubmit={handleSubmit}>
        <input
          className="text-large  w-32 rounded-full px-3 py-2 transition-all duration-300 md:focus:w-48 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-75 md:px-4 md:py-3 "
          placeholder="Enter city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="m-6 rounded-lg p-2"
          value={numDays}
          onChange={(e) => setNumDays(e.target.value)}
        >
          <option value=''>Days?</option>
          <option value={Number(3)}>3</option>
          <option value={Number(7)}>7</option>
          <option value={Number(14)}>14</option>
        </select>
        
        <Button type="primary">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
