import React from 'react';
import { Buttons } from './buttons/Buttons';
import style from './Calculator.module.scss'
import { Screen } from './screen/Screen';

export const Calculator = () => {
    return(
        <div className={style.calculatorBlock}>
            <Screen/>
            <Buttons/>

        </div>
    )
}