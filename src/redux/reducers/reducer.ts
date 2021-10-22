import {
  initState,
  actionTypes,
  actions,
  initStateTypes,
} from "../types/types";

export const Reducer = (state = initState, action: actions): initStateTypes => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        indexOfLanguage: (state.indexOfLanguage = action.payload),
      };
    case actionTypes.CHANGE_TYPE:
      return { ...state, indexOfType: (state.indexOfType = action.payload) };
    case actionTypes.CHANGE_NUM_SYMBOLS:
      return {
        ...state,
        numberOfSymbols: (state.numberOfSymbols = action.payload),
      };
    case actionTypes.CHANGE_DEADLINE:
      return { ...state, deadline: (state.deadline = action.payload) };
    case actionTypes.CHANGE_PRICE:
      return { ...state, price: (state.price = action.payload) };
    default:
      return state;
  }
};
