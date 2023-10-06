import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import tilesListReducer from "./features/tilesList/tilesListSlice";
const store = configureStore({
  reducer: {
    search: searchReducer,
    tilesList: tilesListReducer,
  },
});

export default store;
