import React, {ChangeEvent} from 'react'
/*import './../App.module.css'*/
import s from "./TunerOfCounter.module.css"

export type TunerOfCounter = {
    title: string
    setNumber: (number: number | string) => void
    compareNumbers: (value: number | string) => void
    classNameInput: string
}

export function TunerOfCounter({compareNumbers, title, classNameInput, setNumber}: TunerOfCounter) {

    let onChangeInputTuner = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = Number(e.currentTarget.value)
        setNumber(inputValue)
        //отправляет inputValue в compareMax или в compareStart
        compareNumbers(inputValue)
    }

    return (
        <div className={s.tuner_item}>
            <label htmlFor="1">
                {title}
            </label>
            <input
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