import {AppStateType} from "./store";

export let counter = (state: AppStateType) => state.counter
export let tuner = (state: AppStateType) => state.tunerOfCounter
export let stateAll = (state: AppStateType) => state