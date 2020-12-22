import {countAC, counterReducer, initialStateType, setDisabledAC} from "./counter-reducer";

let initialState: initialStateType;

beforeEach(() => {
    initialState = {
        count: "enter values and press 'set'",
        disabled: false
    }
})

test("set count", () => {

    let action = countAC(4)
    let newState = counterReducer(initialState, action)

    expect(newState.count).toBe(4)
})

test("disabled", () => {

    let action = setDisabledAC(true)
    let newState = counterReducer(initialState, action)

    expect(newState.disabled).toBe(true)
})

/*test("", ()=> {
    let compare = (max: string | number, start: string | number) => {

        if (max <= start || (max < 0 || start < 0)) {
            countAC('Incorrect value')
            if (max === start) {
                setDisabledAC(true)
            }
        } else {
            countAC("enter values and press 'set'")
            setDisabledAC(false)
        }
    }
    //let newState = counterReducer(initialState, action)

    let a = compare(5, 6);

    expect(initialState.count).toBe('Incorrect value')
})*/
