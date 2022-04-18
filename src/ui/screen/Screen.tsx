import React from "react";
import { Input } from "./in-out/Input";
import style from "./Screen.module.scss";

export const Screen = () => {
  return (
    <div className={style.screenBlock}>
      <Input />
    </div>
  );
};
