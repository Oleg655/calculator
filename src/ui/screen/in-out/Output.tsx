import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/store";
import style from "./Output.module.scss";

export const Output = () => {
  const result = useSelector<AppStateType, string | number>(
    (state) => state.calculator.result
  );
  return (
    <div
      className={
        result.toString().length > 14
          ? style.outputBlockForBogDigits
          : style.outputBlock
      }
    >
      {result}
    </div>
  );
};
