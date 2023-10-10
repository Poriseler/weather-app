function DetailsPane({day}) {
  const {date, sunrise, sunset, uvIndexMax, rainSum, windSpeed} = day;
  return (
        <div className="p-5  min-w-[12rem] md:min-w-[20rem] pr-9">

          <p className="flex justify-between">Date: <span>{date}</span></p>
          <p className="flex justify-between">UV Index: <span>{uvIndexMax}</span></p>
          <p className="flex justify-between">Sunrise: <span>{sunrise}</span></p>
          <p className="flex justify-between">Sunset: <span>{sunset}</span></p>
          <p className="flex justify-between">Rain Sum: <span>{rainSum}</span></p>
          <p className="flex justify-between">Wind Speed: <span>{windSpeed}</span></p>
        </div>
  );
}

export default DetailsPane;
