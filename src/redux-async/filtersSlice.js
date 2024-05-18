import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    text: "", // Значення фільтра за замовчуванням
  },
  reducers: {
    changeTextFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;

export const selectFilter = (state) => state.filters.text;

export default filtersSlice.reducer;
