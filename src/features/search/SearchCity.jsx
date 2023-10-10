import { useSelector } from "react-redux";

function SearchCity() {
  const cityName = useSelector((state) => state.search.city);
  return (
    <div className=" pt-7 pb-7 md:pt-9 bg-slate-100  text-center   font-semibold capitalize  text-3xl">
      {cityName}
    </div>
  );
}

export default SearchCity;
