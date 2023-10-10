import Main from "./Main";
import SearchBar from "../features/search/SearchBar";
import SearchCity from "../features/search/SearchCity";

function AppLayout() {
  return (
    <div className=" min-h-screen grid grid-rows-[1fr_5rem_5fr]">
      <SearchBar />

      <SearchCity />
      <Main />
    </div>
  );
}

export default AppLayout;
