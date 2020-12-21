import React, {ChangeEvent} from 'react'
import s from "./TunerOfCounter.module.css"
import {useDispatch} from "react-redux";
import {log} from "util";

export type TunerOfCounter = {
    title: string
    setNumber: (number: number | string) => void
    compareNumbers: (value: number | string) => void
    classNameInput: string
    value: number | string
}

export function TunerOfCounter({value, setNumber, title, classNameInput, compareNumbers}: TunerOfCounter) {
    let dispatch = useDispatch()
    //Срабатывает при изменениях в инпуте
    let onChangeInputTuner = (e: ChangeEvent<HTMLInputElement>) => {
        //достает введенное значение
        let inputValue = Number(e.currentTarget.value)
        //и устанавливает его в max или start
        dispatch(setNumber(inputValue || ""))
        // а так же отправляет его в compareMax или в compareStart
        compareNumbers(inputValue)

    }

    console.log(value)
    return (
        <div className={s.tuner_item}>
            <label htmlFor="1">
                {title}
            </label>
            <input
                value={value}
                className={classNameInput}
                id="1"
                type="number"
                onChange={onChangeInputTuner}/>
        </div>
    )
}

//Функция для сравнения значения из инпута со значением пришедшим из стейта
//compare - функция для обозначения способа сравнения двух значений
/*let checkedNumber = (inputValue: number, num: number | string, compare: (a: number, b: number) => boolean) => {
    let n = Number(num)
    if (!isNaN(n) && (inputValue < 0 || compare(inputValue,  n))) {
        props.setCount('Incorrect value')
    }
}
checkedNumber(inputValue, props.number.max, (a, b) => a>=b)*/