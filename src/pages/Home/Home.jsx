import React from 'react'
import styled from 'styled-components';
// import {InnerLayout} from '../Layouts';
import HomeContentNavbar from '../../Components/HomeContent';

const Home = () => {
    return (
        <HomeStyled>
            <video src="../image/marketing.mp4" muted autoPlay playsInline loop ></video>
            <img src="../image/circles.svg" alt="...img" className="overlay" />
            <HomeContentNavbar />
        </HomeStyled>
    )
}
// styled-components
const HomeStyled = styled.div`
width: 100%;
height: 600px;
position: relative;
overflow: hidden;
video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    filter: brightness(0.7);
}
.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    right: -28%;
    top: -38%;
}
`;
export default Home;
