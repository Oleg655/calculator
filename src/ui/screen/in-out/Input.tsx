import React, { ChangeEvent, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber, result } from "../../../redux/calculator-reducer";
import { AppStateType } from "../../../redux/store";
import style from "./Input.module.scss";

export const Input = () => {
  const inputRef = useRef<any>(null);
  const dispatch = useDispatch();
  const inputValue = useSelector<AppStateType, string>(
    (state) => state.calculator.inputValue
  );

  const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(/^[0-9()+\-*/.]*$/);
    let expression = e.currentTarget.value;
    if (regex.test(expression)) {
      dispatch(changeNumber(expression));
    }
  };
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 400);
    if (inputRef !== null) {
      // возвращаем курсор на оригинальную позицию
      inputRef.current.selectionStart = position;
      inputRef.current.selectionEnd = position;
      console.log("position", position);
    }
    return () => clearTimeout(id);
  });

  return (
    <input
      ref={inputRef}
      autoFocus
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          dispatch(result());
        }
      }}
      onChange={onChangeWrapper}
      value={inputValue}
      className={style.inputBlock}
    ></input>
  );
};
