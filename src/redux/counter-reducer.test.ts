import {countAC, counterReducer, initialStateType} from "./counter-reducer";

let initialState: initialStateType;

beforeEach(() => {
    initialState = {
        count: "enter values and press 'set'"
    }
})

test("set count", () => {

    let action = countAC(4)
    let newState = counterReducer(initialState, action)

    expect(newState.count).toBe(4)
})

