import React, { useState } from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context/globalcontext";
import { Button } from "./button";

function Quote() {
    const {quote, getExistingQuote} = useGlobalContext();

    const [inputState, setInputState] = useState({
        email: '',
    });
 
    const { email } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = async () => {
        await getExistingQuote(inputState); 
    }

    const displayQuote = () => {
        if (quote) {
            return (
                <>
                    <div className="head">Your Personalised Plan:</div>
                    <span><div className="Price">${quote ? quote.toFixed(2) : 0}</div><div className="small">/year</div></span>
                </>
            ) 
        } else {
            return (
                <>
                    <form>
                        <div>
                            <label>Previously Used Email</label>
                            <input type="email" value={email} placeholder="Email" name="email" onChange={handleInput('email')} autoComplete="off" />
                        </div>
                        <Button onClick={e => {e.preventDefault(); handleSubmit()}}>View Existing Quote</Button>
                    </form>
                </>
            )
        }
    }

    return (
        <QuoteStyled>
            {displayQuote()}
        </QuoteStyled>
    )
}

const QuoteStyled = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
.head{
    font-weight: 500;
    font-size: 50px;
}
.Price{
    display: flex;
    font-size: 80px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
}
span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
form{
    gap: 1rem;
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    justify-content: center;
}
input, select{
    border:2px solid #aaa;
    border-radius:4px;
    outline:none;
    width: 100%;
    padding:8px;
    transition:.3s;
}

input:focus{
    border-color:rgb(255, 255, 255);
    box-shadow:0 0 8px 0 rgb(255, 255, 255);
}
`;

export default Quote;
