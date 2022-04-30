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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // if (inputValue !== null) {
    //   inputRef.current.selectionStart = inputValue.length;
    //   inputRef.current.selectionEnd = inputValue.length;
    // }
  }, [inputValue]);

  return (
    <input
      ref={inputRef}
      autoFocus
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          dispatch(result());
        }
      }}
      onClick={()=>{
        inputRef.current.selectionStart = inputValue.length;
      }}
      onChange={onChangeWrapper}
      value={inputValue}
      className={style.inputBlock}
    ></input>
  );
};
