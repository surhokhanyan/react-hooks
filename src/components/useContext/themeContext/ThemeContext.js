import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(false); // for useContext
const ThemeUpdater = createContext();
const Number = createContext(0);
const IncrementNumber = createContext();

export function useTheme () {
    return useContext(ThemeContext)
}
export function useThemeUpdater () {
    return useContext(ThemeUpdater)
}
export function useNumber () {
    return useContext(Number)
}
export function useIncrementNumber () {
    return useContext(IncrementNumber)
}

export function ThemeProvider ({children}) {
    const [darkTheme, setDarkTheme] = useState(true);
    const [number, setNumber] = useState(0)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    function incrementNumber () {
        setNumber( number + 1)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdater.Provider value={toggleTheme}>
                <Number.Provider value={number}>
                    <IncrementNumber.Provider value={incrementNumber}>
                        {children}
                    </IncrementNumber.Provider>
                </Number.Provider>
            </ThemeUpdater.Provider>
        </ThemeContext.Provider>
    )
}