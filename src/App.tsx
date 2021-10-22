import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style/global.css"
import Correctarium from "./components/Correctarium";
import { deadline } from "./redux/logic/deadlineLogic";
import { price } from "./redux/logic/priceLogic";

function App() {
  const dispatch = useDispatch();
  const language = useSelector(({ Reducer }: any) => Reducer.indexOfLanguage);
  const type = useSelector(({ Reducer }: any) => Reducer.indexOfType);
  const symbols = useSelector(({ Reducer }: any) => Reducer.numberOfSymbols);
  const result = () => {
    dispatch({ type: "CHANGE_PRICE", payload: price(language, type, symbols) });
    dispatch({
      type: "CHANGE_DEADLINE",
      payload: deadline(1627394624496, language, type, symbols),
    });
  };
  return (
    <div className="App">
      <Correctarium />
      <button onClick={result}>Замовити</button>
    </div>
  );
}

export default App;
