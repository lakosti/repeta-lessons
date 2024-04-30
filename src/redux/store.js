import { createStore } from "redux";

const initialState = {
  balance: {
    value: 0,
  },
};
const rootReducer = (state = initialState, action) => {
  return state;
};
export const store = createStore(rootReducer);
