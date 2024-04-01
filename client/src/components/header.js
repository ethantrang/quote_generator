import React from "react";
import { styled } from "styled-components";
import logo from "../img/logo.png"

function Header({active, setActive}) {
    return (
        <HeaderStyled>
            <NavBar>
                <img src={logo} alt="" key={1} onClick={() => setActive(1)} className={active === 1 ? 'active': ''}/>
                <Menu>
                    <div key={2} onClick={() => setActive(2)} className={active === 2 ? 'active': ''}><span>Quote Generator</span></div>
                    <div key={3} onClick={() => setActive(3)} className={active === 3 ? 'active': ''}><span>View Your Quote</span></div>
                </Menu>
            </NavBar>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
width: 100%;
padding: 1rem 1rem;
position: fixed;
top: 0;
display: flex;
z-index: 5;
`;

const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
gap: 1.5rem;
img{
    height: 76px;
    width: 100px;
}
img:hover{
    cursor: pointer;
}
`;

const Menu = styled.div`
display: flex;
gap: 1.5rem;
font-weight: 500;
cursor: pointer;
.active{
    font-weight: 600;
}
div{
    height: 100%;
    display: flex;
    align-items: center;
}
`;

export default Header;
