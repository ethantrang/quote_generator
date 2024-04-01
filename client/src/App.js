import React, { useState } from "react";
import styled from "styled-components"
import bg from "./img/gradient.jpeg"
import Header from "./components/header";
import Home from "./components/home";
import Form from "./components/form";
import Quote from "./components/quote";

function App() {
    const [active, setActive] = useState(1);

    const displayPage = () => {
        switch(active) {
            case 2:
                return <Form />
            case 3:
                return <Quote />
            default:
                return <Home active={active} setActive={setActive}/>
        }
    }
    return (
        <AppStyled bg={bg} className="App">
            <MainContainer>
                <Header active={active} setActive={setActive}/>
                {displayPage()}
            </MainContainer>
        </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
width: 100vw;
background-size: cover;
position: fixed;
background-image: url(${props => props.bg});
background-repeat: no-repeat;
&&::-webkit-scrollbar{
    width: 0;
}
display: flex;
justify-content: center;
align-items: center;
`;

const MainContainer = styled.div`
display: flex;
align-items: center;
height: 80vh;
width: 90vw;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
backdrop-filter: blur(7px);
border-radius: 40px;
color: #000000;
font-size: 15px;
font-weight: 300;
`;
export default App;
