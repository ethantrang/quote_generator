import React from "react";
import { styled } from "styled-components";

function Quote() {
    return (
        <QuoteStyled>
            <div className="head">Your Personalised Plan:</div>
            <span><div className="Price">$34.60</div><div className="small">/month</div></span>
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
    font-size: 80px;
    font-weight: 600;
}
span{
    display: flex;
    align-items: center;
}
`;

export default Quote;
