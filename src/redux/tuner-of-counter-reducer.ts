import {restoreState} from "../localStorage/localStorage";

export enum ACTIONS_TYPE {
    SET_MAX_NUMBER = 'TunerOfCounter/SET_MAX_NUMBER',
    SET_START_NUMBER = 'TunerOfCounter/SET_START_NUMBER',
    DISABLED = 'TunerOfCounter/DISABLED',
}

export type setMaxNumberACType = {
    type: ACTIONS_TYPE.SET_MAX_NUMBER,
    payload: {
        maxNumber: number | string
    }
}

export type setStartNumberACType = {
    type: ACTIONS_TYPE.SET_START_NUMBER,
    payload: {
        startNumber: number | string
    }
}

export type setDisabledACType = {
    type: ACTIONS_TYPE.DISABLED
    payload: {
        disabled: boolean
    }
}

export type initialStateType = {
    maxNumber: number | string
    startNumber: number | string
    disabled: boolean
}

let initialState: initialStateType = {
    maxNumber: restoreState().max,
    startNumber: restoreState().min,
    disabled: false
}

export type ActionType = setMaxNumberACType | setStartNumberACType | setDisabledACType

export const tunerOfCounterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_MAX_NUMBER:
            return {...state, ...action.payload}

        case ACTIONS_TYPE.SET_START_NUMBER:
            return {...state, ...action.payload}

        case ACTIONS_TYPE.DISABLED:
            return {...state, ...action.payload}

        default:
            return state
    }
}

export const setMaxNumberAC = (maxNumber: number | string): setMaxNumberACType => ({
    type: ACTIONS_TYPE.SET_MAX_NUMBER, payload: {maxNumber}
})

export const setStartNumberAC = (startNumber: number | string): setStartNumberACType => ({
    type: ACTIONS_TYPE.SET_START_NUMBER, payload: {startNumber}
})

export const setDisabledAC = (disabled: boolean): setDisabledACType => ({
    type: ACTIONS_TYPE.DISABLED, payload: {disabled}
})
