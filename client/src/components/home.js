import React from "react";
import { styled } from "styled-components";
import { Button } from "./button";

function Home({active, setActive}) {
    return (
        <HomeStyled>
            <p onClick={() => setActive(2)}><span >Get Your Quote <i className="fa-solid fa-arrow-right"></i></span></p>
            <p>Just One Click. Free of charge.</p>
            <div>
            <Button>View Existing Quote</Button>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
padding: 5rem 5rem;
gap: 0.5rem;
position: relative;
p{
    display: flex;
    justify-contents: center;
    font-weight: 500;
    font-size: 40px
}
span{
    font-weight: 700;
    font-size: 50px;
    color: #000000;
    cursor: pointer;
    transform: translate(0, 0);

    i{
        font-weight: 800;
        font-size: 40px;
    }
}
span::after{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background: #000;
    transition: transform 0.2s ease-in-out;
    transform: scale(0);
}
span:hover::after{
    transform: scale(1);
}
div{
    gap: 1rem;
}
`;



export default Home;
