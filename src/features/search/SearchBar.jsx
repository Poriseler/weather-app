import { useState } from "react";
import Button from "../../ui/Button";
import { getCoordsByName } from "../../services/apiGeocoding";
import { getWeather, updateCity, updatePosition } from "./searchSlice";
import { useDispatch } from "react-redux";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [numDays, setNumDays] = useState(7);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateCity(query));

    // getCoordsByName(query).then((data) => dispatch(updatePosition(data)));
    getCoordsByName(query).then((data) =>
      dispatch(getWeather({ ...data, numDays })),
    );
    setQuery("");
  }

  return (
    <div className="flex items-end justify-center bg-red-600">
      <form onSubmit={handleSubmit}>
        <input
          className="text-large  w-32 rounded-full px-3 py-2 transition-all duration-300 focus:w-48 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-75 md:px-4 md:py-3"
          placeholder="Enter city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="m-6"
          value={numDays}
          onChange={(e) => setNumDays(e.target.value)}
        >
          <option value={3}>3</option>
          <option value={7}>7</option>
          <option value={14}>14</option>
        </select>
        <Button type="primary">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
