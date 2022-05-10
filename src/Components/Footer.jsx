import React from 'react';
import styled from "styled-components";
import {SectionStyled} from '../Layouts'
import { MobilePro } from '../responsive';

const Footer = () => {
    return (
        <FooterStyled>
            <SectionStyled>
                <div className="contact-footer">
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                    <p>30 Avenue Street, United Kingdom</p>
                    <p>+44 786 997 7162</p>
                    <p>maclinzuniversal@gmail.com</p>
                </div>
                <div className="bg-image">
                    <img src={'/image/map.png'} alt="..." />
                </div>
            </SectionStyled>
        </FooterStyled>
    )
}
//styled-components
const FooterStyled = styled.div`
background-color: #020c31;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
padding:  20px 0;
z-index: 1;
p{
    opacity: 0.5;
    margin: 10px 0;
}
.bg-image{
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
img{
    width: 70%;
    opacity: 0.07;
    ${ MobilePro ({    width: '100%'}) }
    }
}
.contact-title{
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 25px;
    &:before{
        content: '';
        position: absolute;
        bottom: 0;
        transform: translateX(-50%);
        width: 40px;
        height: 2px;
        background-color: #eb3fa9;
        left: 50%;
    }
}
`;
export default Footer
