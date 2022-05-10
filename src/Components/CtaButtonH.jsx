import React from 'react'
import styled from 'styled-components';
import { Tablet } from '../responsive'


const CtaButtonH = ({name}) => {
    return (
        <CtaButtonHeader>
            {name}
        </CtaButtonHeader>
    )
}
//styled-components
const CtaButtonHeader = styled.a`
    text-transform: uppercase;
    background: linear-gradient(130deg, #395FF6 , #EB3FA9);
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all .4s ease-in-out;
    ${ Tablet({fontSize:'10px'}) }

    &:last-child{
        margin-left: 20px;
    }
    &:hover{
        transition: all .4s ease-in-out;
        background: linear-gradient(120deg,  #EB3FA9, #395FF6);
    }
`;
export default CtaButtonH;
