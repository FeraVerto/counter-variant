
export type initialStateType = {
    count: number | string
}

export let initialState: initialStateType = {
    count: "enter values and press 'set'"
}

export type countActionType = {
    type: "SET_COUNT"
    startNumber: string | number
}

export type ActionType = countActionType

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_COUNT":
            console.log(state.count)
            return {...state, count: action.startNumber}

        default:
            return state
    }
}

export const countAC = (startNumber: number | string): countActionType => ({
    type: "SET_COUNT", startNumber
})


/*

//Функция для сравнения значения инпутов  max и start
let compare = (max: string | number, start: string | number) => {

    if (max <= start || (max < 0 || start < 0)) {
        setCount('Incorrect value')
        if (max === start) {
            //Для одновременного отображения error (border: red) в обоих инпутах
            //при одинаковых значениях введенных в инпут + disabled  кнопки  set
            setClassStart(error)
            setClassMax(error)
            setDisabled(true)
        }
    } else {
        setCount("enter values and press 'set'")
        //Как только значения в input будут удовлетворять условиям
        //присваиваем обычный класс input и раздизебливаем кнопку
        setClassStart(input)
        setClassMax(input)
        setDisabled(false)
    }
}

//Функции compareMax и compareStart - обертка для функции compare,
//которая принимает значение из инпута и отдает для сравнения compare
let compareMax = (value: string | number) => {
    compare(value, startNumber)
    //Отдельная валидация для инпута "max value..."
    if (value < 0 || value <= startNumber) {
        setClassMax(error)
        setDisabled(true)
    } else {
        setClassMax(input)
        setDisabled(false)
    }
}

let compareStart = (value: string | number) => {
    compare(maxNumber, value)
    //Отдельная валидация для инпута "start value..."
    if (value < 0 || value >= maxNumber) {
        setClassStart(error)
        setDisabled(true)
    } else {
        setClassStart(input)
        setDisabled(false)
    }
}*/
