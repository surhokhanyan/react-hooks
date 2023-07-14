import React from 'react';
import {useIncrementNumber, useNumber, useTheme, useThemeUpdater} from "./themeContext/ThemeContext";

const UseContext = () => {

    const theme = useTheme();
    const toggle = useThemeUpdater();
    const number = useNumber();
    const incrementNumber = useIncrementNumber();

    const themeStyles = {
        width: "200px",
        height: "200px",
        backgroundColor : theme ? "#333" : "#CCC",
        color : theme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }
    return (
        <>
            <button onClick={toggle}>Change Theme</button>
            <button onClick={incrementNumber}>Increment number</button>
            <div style={themeStyles}>
                Theme
                <p>{number}</p>
            </div>
        </>
    );
};

export default UseContext;