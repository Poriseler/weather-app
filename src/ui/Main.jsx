import DetailsPane from "../features/details/DetailsPane";
import TilesListLayout from "../features/tilesList/TilesListLayout";

function Main() {
  return (
    <div className=" flex flex-col bg-yellow-800">
      <TilesListLayout />
      <DetailsPane />
    </div>
  );
}

export default Main;
