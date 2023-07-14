import React, {useMemo, useState} from 'react';

const UseMemo = () => {

    const [number, setNumber] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);

    let i = 0

    const increment = () => {
        setNumber(number +1)
        console.log("Increment One")
    }
    const incrementTwo = () => {
        setNumberTwo(numberTwo + 1)
        console.log("Increment Two")
    }

    const isEven = useMemo(()  => {
        while (i < 1000000000) i++;
        console.log("Is Even")
        return number % 2 === 0
    }, [number])
    return (
        <div>
            <p>{number} {isEven ? "Even" : "Odd"}</p>
            <button onClick={increment}>Increment {number}</button>
            <p>{numberTwo}</p>
            <button onClick={incrementTwo}>Increment {numberTwo}</button>
        </div>
    );
};

export default UseMemo;