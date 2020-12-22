import {restoreState} from "../localStorage/localStorage";

export type setMaxNumberACType = {
    type: "SET_MAX_NUMBER",
    maxNumber: number | string
}

export type setStartNumberACType = {
    type: "SET_START_NUMBER",
    startNumber: number | string
}

export type initialStateType = {
    maxNumber: number | string
    startNumber: number | string
}

let initialState: initialStateType = {
    maxNumber: restoreState().max,
    startNumber: restoreState().min
}

export type ActionType = setMaxNumberACType | setStartNumberACType

export const tunerOfCounterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_MAX_NUMBER":
            return {...state, maxNumber: action.maxNumber}

        case "SET_START_NUMBER":
            return {...state, startNumber: action.startNumber}

        default:
            return state
    }
}

export const setMaxNumberAC = (maxNumber: number | string): setMaxNumberACType => ({
    type: "SET_MAX_NUMBER", maxNumber
})

export const setStartNumberAC = (startNumber: number | string): setStartNumberACType => ({
    type: "SET_START_NUMBER", startNumber
})