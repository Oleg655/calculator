import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../redux/calculator-reducer";
import { AppStateType } from "../../redux/store";
import style from "./Buttons.module.scss";

export const Buttons = () => {
  const dispatch = useDispatch();

  const onClickChangeNumber = (value: number) => {
    dispatch(changeNumber(value));
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className={style.button} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className={style.buttonsBlock}>
      <div className={style.operators}>
        <button className={style.button}>C</button>
        <button className={style.button}>√</button>
        <button className={style.button}>%</button>
        <button className={style.button}>/</button>
      </div>

      <div className={style.digits}>
        {createDigits()}
        <button className={style.button}>0</button>
        <button className={style.button}>,</button>
        <button className={style.button}>=</button>
      </div>
    </div>
  );
};
