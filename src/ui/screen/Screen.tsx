import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/store";
import { Input } from "./in-out/Input";
import { Output } from "./in-out/Output";
import style from "./Screen.module.scss";

export const Screen = () => {
  const result = useSelector<AppStateType, string | number>(
    (state) => state.calculator.result
  );

  return (
    <>
      {result ? (
        <div className={style.screenBlock}>
          <div className={style.screen}>
            <Input />
            <Output />
          </div>

          <div className={style.line}></div>
        </div>
      ) : (
        <div className={style.screenBlock}>
          <div className={style.screen}>
            <Output />
            <Input />
          </div>

          <div className={style.line}></div>
        </div>
      )}
    </>
  );
};
