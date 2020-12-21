import {useDispatch} from "react-redux";
import {ActionType, countAC, counterReducer, initialStateType} from "./counter-reducer";

let initialState: initialStateType;

beforeEach(() => {
    initialState = {
        count: "enter values and press 'set'",
        disabled: false
    }
})

test("set count", () => {

    let action = countAC(4)
    let newState: initialStateType = counterReducer(initialState, action)

    expect(newState.count).toBe(4)
})