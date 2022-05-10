import React from 'react'
import styled from 'styled-components';
import {Tablet} from '../responsive';



const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="logo">
                <img src="image/logo2.png" alt="..img" />
            </div>
            <ul className="nav-items">
                <li>
                    <a href="##">Home</a>
                </li>
                <li>
                    <a href="##">About</a>
                </li>
                <li>
                    <a href="##">FAQS</a>
                </li>
                <li>
                    <a href="##">Activity</a>
                </li>
                <li>
                    <a href="##">Contact</a>
                </li>
                <div className="primary-btn">GET CONNECTED</div>
            </ul>
        </NavbarStyled>
    )
}
//styled-components
const NavbarStyled = styled.nav`
padding-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
.logo{
    img{
        width: 40px;
    }
}
.nav-items{
    display: flex;
    align-items: center;
    li{
        margin: 0 10px;
        ${Tablet({display: 'none'})}
    }
    .primary-btn{
        margin-left: 10px;
        background: linear-gradient(130deg, #395FF6 , #EB3FA9);
        padding: 5px 9px;
        border-radius : 5px;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover{
            background: linear-gradient(120deg,  #EB3FA9, #395FF6);
        }
    }
}
`;

export default Navbar
