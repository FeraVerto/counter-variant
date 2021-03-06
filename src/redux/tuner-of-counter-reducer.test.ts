import {
    initialStateType,
    setDisabledAC,
    setMaxNumberAC,
    setStartNumberAC,
    tunerOfCounterReducer
} from "./tuner-of-counter-reducer";

let initialState: initialStateType;

beforeEach(() => {
    initialState = {
        maxNumber: 5,
        startNumber: 1,
        disabled: false
    }
})

test("set max number", () => {

    let action = setMaxNumberAC(4)
    let newState = tunerOfCounterReducer(initialState, action)

    expect(newState.maxNumber).toBe(4)
})


test("set start number", () => {

    let action = setStartNumberAC(0)
    let newState = tunerOfCounterReducer(initialState, action)

    expect(newState.startNumber).toBe(0)
})

test("disabled", () => {

    let action = setDisabledAC(true)
    let newState = tunerOfCounterReducer(initialState, action)

    expect(newState.disabled).toBe(true)
})