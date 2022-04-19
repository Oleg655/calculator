import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNumber,
  clear,
  percent,
  result,
  sqrt,
} from "../../redux/calculator-reducer";
import { AppStateType } from "../../redux/store";
import style from "./Buttons.module.scss";

export const Buttons = () => {
  const dispatch = useDispatch();
  
  const inputValue = useSelector<AppStateType, string>(
    (state) => state.calculator.inputValue
  );

  const onClickChangeNumber = (value: string) => {
    switch (value) {
      case "C":
        return dispatch(clear());
      case "=":
        return dispatch(result());
      case "%":
        return dispatch(percent());
      case "&#8730;":
        return dispatch(sqrt());
      default:
        dispatch(changeNumber(inputValue + value));
    }
  };

  return (
    <div className={style.buttonsBlock}>
      <button onClick={() => onClickChangeNumber("C")} className={style.button}>
        C
      </button>
      <button
        onClick={() => onClickChangeNumber("&#8730;")}
        className={style.button}
      >
        &#8730;
      </button>
      <button onClick={() => onClickChangeNumber("%")} className={style.button}>
        %
      </button>
      <button onClick={() => onClickChangeNumber("/")} className={style.button}>
        /
      </button>
      <button onClick={() => onClickChangeNumber("7")} className={style.button}>
        7
      </button>
      <button onClick={() => onClickChangeNumber("8")} className={style.button}>
        8
      </button>
      <button onClick={() => onClickChangeNumber("9")} className={style.button}>
        9
      </button>
      <button onClick={() => onClickChangeNumber("*")} className={style.button}>
        &#215;
      </button>
      <button onClick={() => onClickChangeNumber("4")} className={style.button}>
        4
      </button>
      <button onClick={() => onClickChangeNumber("5")} className={style.button}>
        5
      </button>
      <button onClick={() => onClickChangeNumber("6")} className={style.button}>
        6
      </button>
      <button onClick={() => onClickChangeNumber("-")} className={style.button}>
        -
      </button>
      <button onClick={() => onClickChangeNumber("1")} className={style.button}>
        1
      </button>
      <button onClick={() => onClickChangeNumber("2")} className={style.button}>
        2
      </button>
      <button onClick={() => onClickChangeNumber("3")} className={style.button}>
        3
      </button>
      <button onClick={() => onClickChangeNumber("+")} className={style.button}>
        +
      </button>
      <button
        onClick={() => onClickChangeNumber("00")}
        className={style.button}
      >
        00
      </button>
      <button onClick={() => onClickChangeNumber("0")} className={style.button}>
        0
      </button>
      <button onClick={() => onClickChangeNumber(".")} className={style.button}>
        ,
      </button>
      <button onClick={() => onClickChangeNumber("=")} className={style.button}>
        =
      </button>
    </div>
  );
};
