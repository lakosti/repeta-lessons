import { createStore } from "redux";

//екшен для депозиту
export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

//екшен для зняття
export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

//екшен для зміни мови
export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

//початкове значення
const initialState = {
  balance: {
    value: 0,
    a: 5,
  },
  locale: {
    lang: "uk",
  },
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state, // розпилюємо інший слайс в об'єкті (locale)
        balance: {
          ...state.balance, //розпилюємо властивість a:5
          value: state.balance.value + action.payload,
        },
      };
    case "balance/withdraw":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value - action.payload,
        },
      };
    case "locale/changeLang":
      return {
        ...state,
        locale: {
          ...state.locale,
          lang: action.payload,
        },
      };
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
