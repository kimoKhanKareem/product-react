import React from 'react'
import styled from 'styled-components'
import SmaillHeading from './SmaillHeading';


const MainTitle = ({title, subtitle, parag}) => {
    return (
        <MainTitleStyled>
            <SmaillHeading title={subtitle} />
            <h2>
                {title}
            </h2>
            <p>
                {parag}
            </p>
        </MainTitleStyled>
    )
}
//styled-components
const MainTitleStyled = styled.div`

`;
export default MainTitle;
