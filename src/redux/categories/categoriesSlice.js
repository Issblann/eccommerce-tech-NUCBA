import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";

const INITIAL_STATE = {
  categories: categories,
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
