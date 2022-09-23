import React, { createContext, useState } from "react";

export const ResultSearchContext = createContext()

const SeachContextProvider = ({ children }) => {

    const [resultSearch, setResultSearch] = useState([])

    return (
        <ResultSearchContext.Provider value={{ resultSearch, setResultSearch }}>
            {children}
        </ResultSearchContext.Provider>
    )
}

export default SeachContextProvider;