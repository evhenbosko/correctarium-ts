import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Correctarium = () => {
  const dispatch = useDispatch();
  const price = useSelector(({ Reducer }: any) => Reducer.price);
  const deadline = useSelector(({ Reducer }: any) => Reducer.deadline);
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: e.target.value });
  };
  const changeType = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: "CHANGE_TYPE", payload: e.target.value });
  };
  const changeNum = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "CHANGE_NUM_SYMBOLS", payload: e.target.value });
  };
  return (
    <div className="container">
      <label>Послуга</label>
      <select className="select">
        <option value="Переклад">Переклад </option>
        <option value="Редагування">Редагування</option>
        <label> </label>
      </select>
      <p />
      <label> мова </label>
      <select className="select" onChange={changeLanguage}>
        <option value="Російська">Російська</option>
        <option value="Українська">Українська</option>
        <option value="English">English</option>
      </select>
      <p />
      <label> формат тексту </label>
      <select onChange={changeType}>
        <option value="Pdf,Txt,Doc,Docx">Pdf,Txt,Doc,Docx</option>
        <option value="інший">інший</option>
      </select>
      <p />
      <label> кількість символів </label>
      <input onChange={changeNum} type="number" />
      <p />

      <h1>
        вартість замовлення <p />
        {price}
        грн
      </h1>
      <h1>
        Буде виконано <p />
        {deadline}
      </h1>
    </div>
  );
};
export default Correctarium;
