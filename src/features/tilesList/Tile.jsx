import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDay } from "./tilesListSlice";
import { describeWeather, getWeatherImage } from "../../utils/helpers";

function Tile({ day, onClick: onOpenModal }) {
  const { index, temp, maxTemp, minTemp, date, weatherCode } = day;

  const isSelected = useSelector((state) => state.tilesList.selectedDay) === index;
  
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(updateSelectedDay(index));
    onOpenModal()
   
  }

  return (
    <div className={`${isSelected ? "scale-125" : "transform-none"} flex flex-col min-h-[13rem] items-center justify-between rounded-lg bg-slate-200 p-3 hover:bg-slate-300  transition-[0.5s]`}
      onClick={handleClick}
    >
      
      <div className="pt-3">
        <img src={`./src/static/${getWeatherImage(weatherCode)}`} alt="" />

      </div>
      <div className="p-1">
        {temp !== null ? (
          <p className="text-center">
            Current <span className="font-bold ms-1">{temp} C</span>
          </p>
        ) : null}

        <p className="font-medium text-center">{describeWeather(weatherCode)}</p>
        <p>
          <span className="m-1 font-bold text-yellow-500">{maxTemp} C</span>
          <span className="m-1 font-bold text-cyan-900">{minTemp} C</span>
        </p>
        <p className="text-center">
          { date}
        </p>
      </div>
    </div>
  );
}

export default Tile;
