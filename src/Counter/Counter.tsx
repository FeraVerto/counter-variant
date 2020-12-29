import React from 'react'
import s from './Count.module.css'

export type CounterPropsType = {
    count: number | string,
    maxNumber: number | string,
    startNumber: number | string
}

export function Counter({count, maxNumber}: CounterPropsType) {
    console.log(count)
    return <div className={s.counter}>
        <div  className={count === maxNumber && count !== 0 ? `${s.red_number}` : ""}>
           <p>{count}</p>
        </div>
    </div>
}