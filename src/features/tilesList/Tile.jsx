import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDay } from "./tilesListSlice";
import { useEffect, useState } from "react";

function Tile({ day }) {
  const { index, temp, maxTemp, date, sunrise, sunset, rainSum } = day;
  const [isSelected, setIsSelected] = useState(false);
  const selectedTileIndex = useSelector((state) => state.tilesList.selectedDay);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (selectedTileIndex === index) setIsSelected(true);
  // }, [index, selectedTileIndex, setIsSelected]);
  return (
    <div
      className={`${
        selectedTileIndex === index ? "scale-125" : "transform-none"
      } flex flex-col items-center justify-center rounded-lg bg-gray-400 p-3`}
      onClick={(e) => dispatch(updateSelectedDay(index))}
    >
      <img src="./src/static/sun.png" alt="" />
      <p className="font-medium">Nice weather</p>
      {temp !== null ? (
        <p>
          Current <span>{temp}</span>
        </p>
      ) : null}

      <p>
        <span className="m-1 font-bold text-yellow-500">{maxTemp} C</span>
        <span className="m-1 font-bold text-cyan-900">28 C</span>{" "}
      </p>
    </div>
  );
}

export default Tile;
