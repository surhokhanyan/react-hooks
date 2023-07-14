import React, {useState} from 'react';
import css from "./Count.module.scss";
import {useCount} from "../../hooks/useCount";

const Counts = () => {
    const {count, increment, decrement} = useCount(0);
    return (
        <div className={css.count}>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counts;