import React, { createContext, useState } from 'react'


export const NavigationContext = createContext()
const [currentPath, setCurrentPath] = useState(window.location.pathname)

function NavigationProvider({ children }) {
    return (
        <NavigationContext.Provider value={{}}>
            {children}
        </NavigationContext.Provider>
    )
}


export default NavigationProvider