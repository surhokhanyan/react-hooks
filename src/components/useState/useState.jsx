import React, {useState} from 'react';

const UseState = () => {
    const [age, setAge] = useState(getAge)

    function getAge () {
        return 10;
    }
    function handleClick (){
        setAge(a => a + 1)
        setAge(a => a + 1)
        setAge(a => a + 1)
    }
    return (
        <div onClick={handleClick}>
            {age}
        </div>
    );
};

export default UseState;