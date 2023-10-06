import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import formatDate from "../../utils/helpers";
const initialState = {
  city: "",
  position: {},
  days: [],
  status: "idle",
  error: "",
};

export const getWeather = createAsyncThunk(
  "search/featchWeatherData",
  async function ({ lat, lon, numDays }) {
    const url = `https://api.open-meteo.com/v1/forecast?current_weather=true&forecast_days=${numDays}&timezone=Europe%2FBerlin&daily=temperature_2m_max,weathercode,sunrise,sunset,uv_index_max,rain_sum&latitude=${lat}&longitude=${lon}`;
    const res = await fetch(url);
    const data = await res.json();

    const allDaysWeather = data.daily.temperature_2m_max.map((val, i) => {
      return {
        index: i,
        temp: i === 0 ? data.current_weather.temperature : null,
        weatherCode:
          i === 0
            ? data.current_weather.weathercode
            : data.daily.weathercode[i],
        maxTemp: data.daily.temperature_2m_max[i],
        date: formatDate(data.daily.time[i]),
        uvIndexMax: data.daily.uv_index_max[i],
        sunrise: data.daily.sunrise[i],
        sunset: data.daily.sunset[i],
        rainSum: data.daily.rain_sum[i],
      };
    });
    return allDaysWeather;
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
        state.days = action.payload;
        state.status = "idle";
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateCity, updatePosition } = searchSlice.actions;

export default searchSlice.reducer;
