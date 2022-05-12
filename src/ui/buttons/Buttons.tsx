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
import Square from "../../assets/square";
import Multiply from "../../assets/multiply";
import Delete from "../../assets/delete";
import Percent from "../../assets/percent";
import Slash from "../../assets/slash";
import Seven from "../../assets/seven";
import Eight from "../../assets/eight";
import Nine from "../../assets/nine";
import Four from "../../assets/four";
import Five from "../../assets/five";
import Six from "../../assets/six";
import Minus from "../../assets/minus";
import One from "../../assets/one";
import Two from "../../assets/two";
import Three from "../../assets/three";
import Plus from "../../assets/plus";
import DoubleZero from "../../assets/doubleZero";
import Zero from "../../assets/zero";
import Comma from "../../assets/comma";
import Equal from "../../assets/equal";

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
        <div className={style.buttonChild}>
          <Delete className={style.svg} />
        </div>
      </button>

      <button onClick={() => onClickChangeNumber("^")} className={style.button}>
        <div className={style.buttonChild}>
          <Square className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("%")} className={style.button}>
        <div className={style.buttonChild}>
          <Percent className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("/")} className={style.button}>
        <div className={style.buttonChild}>
          <Slash className={style.svg} />
        </div>
      </button>

      <button onClick={() => onClickChangeNumber("7")} className={style.button}>
        <div className={style.buttonChild}>
          <Seven className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("8")} className={style.button}>
        <div className={style.buttonChild}>
          <Eight className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("9")} className={style.button}>
        <div className={style.buttonChild}>
          <Nine className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("*")} className={style.button}>
        <div className={style.buttonChild}>
          <Multiply className={style.svg} />
        </div>
      </button>

      <button onClick={() => onClickChangeNumber("4")} className={style.button}>
        <div className={style.buttonChild}>
          <Four className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("5")} className={style.button}>
        <div className={style.buttonChild}>
          <Five className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("6")} className={style.button}>
        <div className={style.buttonChild}>
          <Six className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("-")} className={style.button}>
        <div className={style.buttonChild}>
          <Minus className={style.svg} />
        </div>
      </button>

      <button onClick={() => onClickChangeNumber("1")} className={style.button}>
        <div className={style.buttonChild}>
          <One className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("2")} className={style.button}>
        <div className={style.buttonChild}>
          <Two className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("3")} className={style.button}>
        <div className={style.buttonChild}>
          <Three className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("+")} className={style.button}>
        <div className={style.buttonChild}>
          <Plus className={style.svg} />
        </div>
      </button>

      <button
        onClick={() => onClickChangeNumber("00")}
        className={style.button}
      >
        <div className={style.buttonChild}>
          <DoubleZero className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("0")} className={style.button}>
        <div className={style.buttonChild}>
          <Zero className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber(".")} className={style.button}>
        <div className={style.buttonChild}>
          <Comma className={style.svg} />
        </div>
      </button>
      <button onClick={() => onClickChangeNumber("=")} className={style.button}>
        <div className={style.buttonChild}>
          <Equal className={style.svg} />
        </div>
      </button>
    </div>
  );
};
