import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe";
// import filtersReducer from "../features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    // filters: filtersReducer,
  },
});

export default store;
