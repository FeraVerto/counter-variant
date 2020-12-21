import {createStore} from "redux";
import {combineReducers} from 'redux'
import {counterReducer} from "./counter-reducer";
import {tunerOfCounterReducer} from "./tuner-of-counter-reducer";


let reducers = combineReducers({
    counter: counterReducer,
    tunerOfCounter: tunerOfCounterReducer
})

export type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>
/*export type StoreType = Store<AppStateType>*/


export let store = createStore(reducers);



