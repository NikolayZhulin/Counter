import s from './Counter.module.css'
import {useState} from "react";


export const Counter = () => {

    let [count, setCount]=useState<number>(0)

    return (
        <div className={s.counter_wrapper}>
                <div className={s.count_field}>
                    <span className={s.count_number}>{count}</span>
                </div>
                <div className={s.buttons_wrapper}>
                    <div>inc</div>
                    <div>reset</div>
                </div>
        </div>
    )
}