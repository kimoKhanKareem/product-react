import React from 'react'
import styled from 'styled-components';
import { Tablet } from '../responsive';


const SmaillHeading = ({title, Before}) => {
    return (
        <SmaillHeadingStyled>
            <h3 className={Before}>{title}</h3>
        </SmaillHeadingStyled>
    )
}

const SmaillHeadingStyled = styled.div`
h3{
 background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
 background-clip: text;
 -webkit-text-fill-color: transparent;
 -webkit-background-clip: text;
 display: inline-block;
${ Tablet({fontSize: '15px'}) }
}
`;

export default SmaillHeading
