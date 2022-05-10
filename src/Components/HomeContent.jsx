import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import Header from './Header';





const HomeContentNavbar = () => {
    return (
        <HomeContentStyled>
            <Navbar />
            <Header />
        </HomeContentStyled>
        
    );
}
//styled-components
const HomeContentStyled = styled.div`
padding: 10px 0;
position: absolute;
top: 0;
left: 50%;
width: 80%;
height: 100%;
transform: translateX(-50%);
`;

export default HomeContentNavbar;
