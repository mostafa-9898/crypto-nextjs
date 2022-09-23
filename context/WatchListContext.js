import React, { createContext, useEffect, useState } from "react";

export const listContext = createContext()

const WatchListContext = ({ children }) => {

    const [watch, setWatch] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {

            if (!localStorage.getItem('watchlist')) {
                localStorage.setItem('watchlist', '[]')
            } else {
                const list = localStorage.getItem('watchlist')
                setWatch(JSON.parse(list))
            }

        }

    }, []);

    return (
        <listContext.Provider value={{ watch, setWatch }}>
            {children}
        </listContext.Provider>
    )
}

export default WatchListContext;