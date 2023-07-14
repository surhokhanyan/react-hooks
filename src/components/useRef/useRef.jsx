import React, {useEffect, useRef, useState} from 'react';

const UseRef = () => {
    const [name, setName] = useState("");

    const inputRef = useRef()

    function focus(){
        inputRef.current.focus();
    }
    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            <button onClick={focus}>Focus</button>
        </div>
    );
};


export default UseRef;