// import { combineReducers, createStore } from "redux";
// import { balanceReducer } from "./balanceSlice";
// import { localeReducer } from "./localeSlice";

// //*початкове значення
// const initialState = {
//   //*слайс 1
//   balance: {
//     value: 0,
//     a: 5,
//   },
//   //*слайс 2
//   locale: {
//     lang: "uk",
//   },
// };

//* якщо редюсерів багато то міксуємо через combine і задаємо їм як початкове значення редюсер де у стейті вказане початкове значення state
// const rootReducer = combineReducers({
//   balance: balanceReducer, //*1 слайс
//   locale: localeReducer,
// });
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state, // розпилюємо інший слайс в об'єкті (locale)
//         balance: {
//           ...state.balance, //розпилюємо властивість a:5
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
// export const store = createStore(rootReducer);
