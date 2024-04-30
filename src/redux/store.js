import { createStore } from "redux";

export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

const initialState = {
  balance: {
    value: 0,
  },
};
const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};
export const store = createStore(rootReducer);
