import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter/Counter";
import Button from "./Button/Button";
import {TunerOfCounter} from "./TunerOfCounter/TunerOfCounter";
import {saveState} from "./localStorage/localStorage";

import {countAC, setDisabledAC} from "./redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {setMaxNumberAC, setStartNumberAC} from "./redux/tuner-of-counter-reducer";
import {counter, tuner} from "./redux/selectors";


export const App = () => {

    let countState = useSelector(counter)
    let tunerState = useSelector(tuner)
    let dispatch = useDispatch()

    //стейт для выведения ошибок в каждом инпуте по отдельности
    let [classMax, setClassMax] = useState<string>(`${s.input}`)
    let [classStart, setClassStart] = useState<string>(`${s.input}`)

    let error = `${s.error}`
    let input = `${s.input}`

    //max: string | number, start: string | number
    //compares two numbers, assigns a class, dispatch
    const compare = (max: string | number, start: string | number) => {

        if (max <= start || (max < 0 || start < 0)) {
            dispatch(countAC('Incorrect value'))
            if (max === start) {
                //Для одновременного отображения error (border: red) в обоих инпутах
                //при одинаковых значениях введенных в инпут + disabled  кнопки  set
                setClassStart(error)
                setClassMax(error)
                dispatch(setDisabledAC(true))
            }
        } else {
            dispatch(countAC("enter values and press 'set'"))
            //Как только значения в input будут удовлетворять условиям
            //присваиваем обычный класс input и раздизебливаем кнопку
            setClassStart(input)
            setClassMax(input)
            dispatch(setDisabledAC(false))
        }
    }

    //value: string | number
    //compares the resulting maxNumber with the startNumber from the state
    let compareMax = (value: string | number) => {
        compare(value, tunerState.startNumber)
        //Отдельная валидация для инпута "max value..."
        if (value < 0 || value <= tunerState.startNumber) {
            setClassMax(error)
            dispatch(setDisabledAC(true))
        } else {
            setClassMax(input)
            dispatch(setDisabledAC(false))
        }
    }

    //value: string | number
    //compares the resulting startNumber with the maxNumber from the state
    let compareStart = (value: string | number) => {
        compare(tunerState.maxNumber, value)
        //Отдельная валидация для инпута "start value..."
        if (value < 0 || value >= tunerState.maxNumber) {
            setClassStart(error)
            dispatch(setDisabledAC(true))
        } else {
            setClassStart(input)
            dispatch(setDisabledAC(false))
        }
    }

    //accepts nothing
    //increases counter by 1
    function increment() {
        if (countState.count < tunerState.startNumber) {
            let newValue = Number(countState.count) + 1
            dispatch(countAC(newValue || ""))
        }
    }

    //accepts nothing
    //reset to initialization value
    function reset() {
        if (countState.count > tunerState.startNumber) {
            dispatch(countAC(tunerState.startNumber))
        }
    }

    //accepts nothing
    //set initial value to count
    //and save maxNumber, startNumber to localStorage
    function set() {
        dispatch(countAC(tunerState.startNumber))
        dispatch(setDisabledAC(true))

        saveState(tunerState.maxNumber, tunerState.startNumber)
    }


    return (
        <div className={s.App}>

            <div className={s.tuner_block}>
                <div className={s.tuner}>

                    <TunerOfCounter
                        value={tunerState.maxNumber}
                        title={"max value:"}
                        setNumber={setMaxNumberAC}
                        compareNumbers={compareMax}
                        classNameInput={classMax}
                    />

                    <TunerOfCounter
                        value={tunerState.startNumber}
                        title={"start value:"}
                        setNumber={setStartNumberAC}
                        compareNumbers={compareStart}
                        classNameInput={classStart}
                    />

                </div>
                <div className={s.button_block}>
                    <Button onClick={set} title={"set"}
                            disabled={countState.disabled}
                    />
                </div>
            </div>

            <div className={s.count_block}>
                <Counter count={countState.count} maxNumber={tunerState.maxNumber}
                         startNumber={tunerState.startNumber}/>
                <div className={s.button_block}>
                    <Button onClick={increment} title={"inc"}
                            disabled={countState.count === tunerState.maxNumber || tunerState.maxNumber === null}/>
                    <Button onClick={reset} title={"reset"}
                            disabled={countState.count === tunerState.startNumber || tunerState.startNumber === null}/>
                </div>
            </div>

        </div>
    );
}


