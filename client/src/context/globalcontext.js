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

    const getExistingQuote = async (email) => {
        const response = await axios.get(`${BASE_URL}quote`, email).catch((err) => {
            console.error(err.message);
        })

        setQuote(response.data);
    }
    return (
        <GlobalContext.Provider value={{
            quote,
            getQuote,
            getExistingQuote,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
