import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  //!ДОДАВАННЯ НОВОГО
  //*якщо необіхдно додати якісь дані окрім значення payload (id ще наприклад)
  //   reducers: {
  //     changeLang: {
  //       reducer: (state, action) => {
  //         state.lang = action.payload;
  //       },
  //       prepare: (newLang) => {
  //         return {
  //           payload: {
  //             id: crypto.randomUUID(),
  //             lang: newLang,
  //           },
  //         };
  //       },
  //     },
  //   },
});

export const { changeLang } = slice.actions;

export default slice.reducer;
