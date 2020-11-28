import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter/Counter";
import Button from "./Button/Button";
import {TunerOfCounter} from "./TunerOfCounter/TunerOfCounter";

function App() {
    //стейт для максимального и стартового числа
    let [maxNumber, setMaxNumber] = useState<number | string>(0)
    let [startNumber, setStartNumber] = useState<number | string>(0)
    //стейт для выведения ошибок в каждом инпуте по отдельности
    let [classMax, setClassMax] = useState<string>(`${s.input}`)
    let [classStart, setClassStart] = useState<string>(`${s.input}`)
    //стейт для числа, которое выводится в Counter
    let [count, setCount] = useState<number | string>("enter values and press 'set'")
    //стейт для дизэйбла кнопки set при ошибке или после установки значений в maxNumber и startNumber
    let [disabled, setDisabled] = useState<boolean>(false)

    let error = `${s.error}`
    let input = `${s.input}`

    //Функция для сравнения значения инпутов  max и start
    let compare = (max: string | number, start: string | number) => {
        if (max <= start || (max < 0 || start < 0)) {
            setCount('Incorrect value')
            if (max === start) {
                setClassStart(error)
                setClassMax(error)
                setDisabled(true)
            }
        } else {
            setCount("enter values and press 'set'")
            setClassStart(input)
            setClassMax(input)
            setDisabled(false)
        }
    }

    //Функции compareMax и compareStart - обертка для функции compare,
    //которая принимает значение из инпута и отдает для сравнения compare
    let compareMax = (value: string | number) => {
        compare(value, startNumber)
        //Валидация для инпута "max value..."
        if(value < 0 || value <= startNumber) {
            setClassMax(error)
            setDisabled(true)
        } else {
            setClassMax(input)
            setDisabled(false)
        }
    }

    let compareStart = (value: string | number) => {
        compare(maxNumber, value)
        //Валидация для инпута "start value..."
        if(value < 0 || value >= maxNumber) {
            setClassStart(error)
            setDisabled(true)
        } else {
            setClassStart(input)
            setDisabled(false)
        }
    }

    function increment() {
        if (count < maxNumber) {
            //не изменяем state напрямую!
            let newValue = Number(count) + 1
            setCount(newValue)
        }
    }

    function reset() {
        if (count > startNumber) {
            setCount(startNumber)
        }
    }

//устанавливаем стартовое значение в counter
    function set() {
        setCount(startNumber)
        setDisabled(true)
    }

    return (

        <div className={s.App}>

            <div className={s.tuner_block}>
                <div className={s.tuner}>

                    <TunerOfCounter
                        title={"max value:"}
                        setNumber={setMaxNumber}
                        compareNumbers={compareMax}
                        classNameInput={classMax}
                    />

                    <TunerOfCounter
                        title={"start value:"}
                        setNumber={setStartNumber}
                        compareNumbers={compareStart}
                        classNameInput={classStart}
                    />

                </div>
                <div className={s.button_block}>
                    <Button onClick={set} title={"set"}
                            disabled={disabled}
                    />
                </div>
            </div>

            <div className={s.count_block}>
                <Counter count={count} maxNumber={maxNumber} startNumber={startNumber}/>
                <div className={s.button_block}>
                    <Button onClick={increment} title={"inc"} disabled={count === maxNumber}/>
                    <Button onClick={reset} title={"reset"} disabled={count === startNumber}/>
                </div>
            </div>

        </div>
    );
}

export default App;