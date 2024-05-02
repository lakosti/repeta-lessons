//*екшен для депозиту
export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

//*екшен для зняття
export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

export const balanceReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
