import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [age, setAge] = useState(getAge)

    useEffect(()=>{
        console.log("hi")
        return ()=>{
            console.log("clean up")
        }
    }, [age])

    function getAge () {
        return 10;
    }
    function handleClick (){
        setAge(a => a + 1)
        setAge(a => a + 1)
        setAge(a => a + 1)
    }

    function VideoPlayer ({src, isPlaying}){
        isPlaying = true
        return <video src={src}/>
    }
    return (
        <div onClick={handleClick}>
            {age}
            <VideoPlayer/>
        </div>
    );
};

export default UseEffect;