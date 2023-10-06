import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDay: null,
};

const tileListSlice = createSlice({
  name: "tilesList",
  initialState,
  reducers: {
    updateSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
  },
});

export const { updateSelectedDay } = tileListSlice.actions;

export default tileListSlice.reducer;
