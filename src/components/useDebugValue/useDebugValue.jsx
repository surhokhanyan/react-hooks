import React, {useDebugValue, useState} from 'react';
import {useOnlineStatus} from "./useOnlineStatus/useOnlineStatus";

function StatusBar(){
    const isOnline = useOnlineStatus();

    return (
        <div>
            {isOnline ? "Online ♥" : "Offline ♠"}
        </div>
    );

}

const UseDebugValue = () => {
    return <StatusBar/>
};

export default UseDebugValue;