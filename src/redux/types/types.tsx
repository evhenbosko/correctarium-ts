export interface initStateTypes {
  indexOfLanguage: string;
  indexOfType: string;
  numberOfSymbols: number;
  price: number;
  deadline: string;
}
export const initState: initStateTypes = {
  indexOfLanguage: "00",
  indexOfType: "",
  numberOfSymbols: 0,
  price: 0,
  deadline: "",
};
export type actions =
  | ChangeLanguageAction
  | ChangeNumSymbolsAction
  | ChangeTypeAction
  | ChangePriceAction
  | ChangeDeadlineAction;
export enum actionTypes {
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
  CHANGE_TYPE = "CHANGE_TYPE",
  CHANGE_NUM_SYMBOLS = "CHANGE_NUM_SYMBOLS",
  CHANGE_DEADLINE = "CHANGE_DEADLINE",
  CHANGE_PRICE = "CHANGE_PRICE",
}

interface ChangeLanguageAction {
  type: actionTypes.CHANGE_LANGUAGE;
  payload: any;
}
interface ChangeTypeAction {
  type: actionTypes.CHANGE_TYPE;
  payload: any;
}
interface ChangeNumSymbolsAction {
  type: actionTypes.CHANGE_NUM_SYMBOLS;
  payload: any;
}
interface ChangePriceAction {
  type: actionTypes.CHANGE_PRICE;
  payload: any;
}
interface ChangeDeadlineAction {
  type: actionTypes.CHANGE_DEADLINE;
  payload: any;
}
