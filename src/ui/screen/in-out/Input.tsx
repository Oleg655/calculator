import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../../redux/calculator-reducer";
import { AppStateType } from "../../../redux/store";
import style from "./Input.module.scss";

export const Input = () => {
  const inputValue = useSelector<AppStateType, number>(
    (state) => state.calculator.inputValue
  );
  

  return <span className={style.inputBlock}>{inputValue}</span>;
};
