import { createSlice } from "@reduxjs/toolkit";

//*якщо необіхдно додати id або ще якесь значення
// export const deposit = createAction("balance/deposit", (id) => {
//   return {
//     payload: {
//       id: id,
//     },
//   };
// });
//! майже завжди будемо юзати лише createSlice
// //*deposit - перетворюється до рядка "balance/deposit"

// export const deposit = createAction("balance/deposit");
// export const withdraw = createAction("balance/withdraw");

// //Під капотом працює Immer який порівнює чернетку з ориг станом і переписує
// //* В чистому Редаксі не мажна мутувати стан і Тулкіт можна

// export const balanceReducer1 = createReducer({ value: 0 }, (builder) => {
//   builder
//     // .addCase("balance/deposit", (state, action) => {
//     //   state.value + action.payload;
//     // })
//     .addCase(deposit, (state, action) => {
//       state.value + action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value - action.payload;
//     });
// });

//!createSlice

const slice = createSlice({
  name: "balance",
  initialState: { value: 0 },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;
