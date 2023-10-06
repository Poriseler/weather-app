import { useDispatch, useSelector } from "react-redux";
import Tile from "./Tile";
import { useEffect } from "react";

function TilesListLayout() {
  const days = useSelector((state) => state.search.days);

  return (
    <div className="flex h-2/4 grow flex-row flex-wrap items-center justify-center gap-5">
      {days.map((day) => (
        <Tile day={day} key={day.index} />
      ))}
    </div>
  );
}

export default TilesListLayout;
