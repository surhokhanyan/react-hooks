import React, {useCallback, useState} from 'react';
import Title from "./Title";
import Age from "./Age";
import Increment from "./Increment";

const UseCallback = () => {

    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(100000)

    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary +10000)
    }, [salary])

    return (
        <div>
           <Title/>
            <Age name={age}/>
            <Increment name={age} increment={incrementAge}/>
            <Age name={salary}/>
            <Increment name={salary} increment={incrementSalary}/>
        </div>
    );
};

export default UseCallback;