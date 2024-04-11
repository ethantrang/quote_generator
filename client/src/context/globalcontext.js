import axios from "axios";
import React, { useState, useContext } from "react";

const BASE_URL = "http://localhost:8000/"

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {
    const [quote, setQuote] = useState();

    const getQuote = async (info) => {
        const response = await axios.post(`${BASE_URL}quote`, info).catch((err) => {
            console.error(err.message);
        })

        setQuote(response.data.quote);
    }

    return (
        <GlobalContext.Provider value={{
            quote,
            getQuote,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}