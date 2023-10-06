import { useSelector } from "react-redux";

function SearchCity() {
  const cityName = useSelector((state) => state.search.city);
  return (
    <div className=" mb-4 bg-slate-100 py-7 text-center text-2xl font-semibold capitalize opacity-70 md:text-3xl">
      {cityName}
    </div>
  );
}

export default SearchCity;
