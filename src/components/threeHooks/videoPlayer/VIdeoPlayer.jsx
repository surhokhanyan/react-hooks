import React, {useRef, memo} from 'react';

const VIdeoPlayer = ({src, onPlay, onPause}) => {

    const videoRef = useRef();

    const countRef = useRef(0);
    countRef.current++

    return (
        <div>
            <p>Call count is {countRef.current}</p>
            <h2>{src.title}</h2>
            <video src={src.url} ref={videoRef}></video>
            <button onClick={()=>{
                videoRef.current.play()
                onPlay()
            }}>Play</button>
            <button onClick={()=>{
                videoRef.current.pause()
                onPause()
            }}>Pause</button>
        </div>
    );
};

export default memo(VIdeoPlayer);