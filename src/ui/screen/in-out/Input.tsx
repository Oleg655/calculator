import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../../redux/calculator-reducer";
import { AppStateType } from "../../../redux/store";
import style from "./Input.module.scss";

export const Input = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector<AppStateType, string>(
    (state) => state.calculator.inputValue
  );

  const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
    debugger
    const expression = e.currentTarget.value;
    if (
      expression.match(
        "^((?:((-?d+)(,d+)?)+[*+/-])+((-?d+)(,d+)?)+)|^(-?d+)(.d+)?$"
      )
    ) {
      dispatch(changeNumber(expression));
    }
  };

  return (
    <input
      onChange={onChangeWrapper}
      type="text"
      value={inputValue}
      className={style.inputBlock}
    ></input>
  );
};
