import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../redux/calculator-reducer";
import { AppStateType } from "../../redux/store";
import style from "./Buttons.module.scss";

export const Buttons = () => {
  const dispatch = useDispatch();
  const symbols = useSelector<AppStateType, string[]>(
    (state) => state.calculator.buttons
  );
  const inputValue = useSelector<AppStateType, string>(
    (state) => state.calculator.inputValue
  );

  const onClickChangeNumber = (value: string) => {
    dispatch(changeNumber(value));
  };
 

  return (
    <div className={style.buttonsBlock}>
      
      {symbols.map((s) => {
        return <button onClick={()=>onClickChangeNumber(inputValue + s)} className={style.button}>{s}</button>;
      })}

     
    </div>
  );
};
