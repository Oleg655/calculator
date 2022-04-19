import React from "react";
import { Input } from "./in-out/Input";
import { Output } from "./in-out/Output";
import style from "./Screen.module.scss";

export const Screen = () => {



  return (
    <div className={style.screenBlock}>
      <Output/>
      <Input />
    </div>
  );
};
