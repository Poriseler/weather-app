import Main from "./Main"
import SearchBar from "../features/search/SearchBar"

function AppLayout() {
    return (
        <div className="bg-slate-600 grid h-[100dvh] grid-rows-[1fr_5fr]">
            <SearchBar />
            <Main />
        </div>
    )
}

export default AppLayout
