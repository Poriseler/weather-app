import { useSelector } from "react-redux";
import TilesListLayout from "../features/tilesList/TilesListLayout";
import Message from "./Message";

function Main() {
  const isCityEmpty = '' === useSelector(state=>state.search.city)
  return (
    <main className=" flex flex-col bg-slate-100">
      {isCityEmpty && <Message>Don't be shy and search for a city!</Message>}
      <TilesListLayout />
      
    </main>
  );
}

export default Main;
