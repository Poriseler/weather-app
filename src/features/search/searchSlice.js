import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formatDate from "../../utils/helpers";
import {format, parseISO} from 'date-fns'
import { getCityNameByCoords } from "../../services/apiGeocoding";
const initialState = {
  city: "",
  position: {},
  days: [],
  status: "idle",
  error: "",
  
};

export function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export const getWeather = createAsyncThunk(
  "search/featchWeatherData",
  async function ({ lat, lon, numDays, type }) {
    const url = `https://api.open-meteo.com/v1/forecast?current_weather=true&forecast_days=${numDays}&timezone=Europe%2FBerlin&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset,uv_index_max,rain_sum,windspeed_10m_max&latitude=${lat}&longitude=${lon}`;
    const res = await fetch(url);
    const data = await res.json();
    
    let cityName = ''
    console.log(type)
    if (type === 'auto') {
      cityName = await getCityNameByCoords(lat, lon)
    }
    console.log(cityName)
    
    const allDaysWeather = data.daily.temperature_2m_max.map((val, i) => {
      return {
        index: i,
        temp: i === 0 ? data.current_weather.temperature : null,
        weatherCode:
          i === 0
            ? data.current_weather.weathercode
            : data.daily.weathercode[i],
        maxTemp: data.daily.temperature_2m_max[i],
        minTemp: data.daily.temperature_2m_min[i],
        windSpeed: data.daily.windspeed_10m_max[i],
        date: format(parseISO(data.daily.time[i]), 'ii.MM'),
        uvIndexMax: data.daily.uv_index_max[i],
        sunrise: format(parseISO(data.daily.sunrise[i]), 'HH:mm'),
        sunset: format(parseISO(data.daily.sunset[i]), 'HH:m'),
        rainSum: data.daily.rain_sum[i],
      };
    });
    return {allDaysWeather, lat, lon, cityName};
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateCity(state, action) {
      state.city = action.payload;
    },
    updatePosition(state, action) {
      state.position = { ...action.payload };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.position = { lat:action.payload.lat, lon:action.payload.lon }
        state.days = action.payload.allDaysWeather;
        state.status = "idle";
        if (action.payload.cityName !== '') state.city = action.payload.cityName

      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateCity, updatePosition } = searchSlice.actions; 
export default searchSlice.reducer;
