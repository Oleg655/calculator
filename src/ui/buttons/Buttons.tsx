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
import { ReactComponent as Square } from "../../assets/sqr.svg";
import { ReactComponent as Multiply } from "../../assets/multiply.svg";

export const Buttons = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector<AppStateType, string>(
    (state) => state.calculator.inputValue
  );

  const onClickChangeNumber = (value: string) => {
    switch (value) {
      case "C":
        dispatch(clear());
        break;
      case "=":
        dispatch(result());
        break;
      case "%":
        dispatch(percent());

        break;
      case "^":
        dispatch(sqrt());
        break;

      default:
        dispatch(changeNumber(inputValue + value));
    }
  };

  return (
    <div className={style.buttonsBlock}>
      <button onClick={() => onClickChangeNumber("C")} className={style.button}>
        <div className={style.buttonChild}>C</div>
      </button>

      <button onClick={() => onClickChangeNumber("^")} className={style.button}>
        <div className={style.buttonChild}>
          <Square className={style.square} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("%")} className={style.button}>
        <div className={style.buttonChild}>%</div>
      </button>
      <button onClick={() => onClickChangeNumber("/")} className={style.button}>
        <div className={style.buttonChild}>/</div>
      </button>

      <button onClick={() => onClickChangeNumber("7")} className={style.button}>
        <div className={style.buttonChild}>7</div>
      </button>
      <button onClick={() => onClickChangeNumber("8")} className={style.button}>
        <div className={style.buttonChild}>8</div>
      </button>
      <button onClick={() => onClickChangeNumber("9")} className={style.button}>
        <div className={style.buttonChild}>9</div>
      </button>
      <button onClick={() => onClickChangeNumber("*")} className={style.button}>
        <div className={style.buttonChild}>
          <Multiply className={style.multiply} />
        </div>
      </button>

      <button onClick={() => onClickChangeNumber("4")} className={style.button}>
        <div className={style.buttonChild}>4</div>
      </button>
      <button onClick={() => onClickChangeNumber("5")} className={style.button}>
        <div className={style.buttonChild}>5</div>
      </button>
      <button onClick={() => onClickChangeNumber("6")} className={style.button}>
        <div className={style.buttonChild}>6</div>
      </button>
      <button onClick={() => onClickChangeNumber("-")} className={style.button}>
        <div className={style.buttonChild}>-</div>
      </button>

      <button onClick={() => onClickChangeNumber("1")} className={style.button}>
        <div className={style.buttonChild}>1</div>
      </button>
      <button onClick={() => onClickChangeNumber("2")} className={style.button}>
        <div className={style.buttonChild}>2</div>
      </button>
      <button onClick={() => onClickChangeNumber("3")} className={style.button}>
        <div className={style.buttonChild}>3</div>
      </button>
      <button onClick={() => onClickChangeNumber("+")} className={style.button}>
        <div className={style.buttonChild}>+</div>
      </button>

      <button
        onClick={() => onClickChangeNumber("00")}
        className={style.button}
      >
        <div className={style.buttonChild}>00</div>
      </button>
      <button onClick={() => onClickChangeNumber("0")} className={style.button}>
        <div className={style.buttonChild}>0</div>
      </button>
      <button onClick={() => onClickChangeNumber(".")} className={style.button}>
        <div className={style.buttonChild}>,</div>
      </button>
      <button onClick={() => onClickChangeNumber("=")} className={style.button}>
        <div className={style.buttonChild}>=</div>
      </button>
    </div>
  );
};
