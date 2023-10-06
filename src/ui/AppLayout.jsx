import Main from "./Main";
import SearchBar from "../features/search/SearchBar";
import SearchCity from "../features/search/SearchCity";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_1fr_5fr] bg-slate-600">
      <SearchBar />

      <SearchCity />
      <Main />
    </div>
  );
}

export default AppLayout;
