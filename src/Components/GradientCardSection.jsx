import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import GradientCard from './GradientCard';
import CtaButtonH from './CtaButtonH';




const GradientCardSection = () => {

    return (
        <GradientCardSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} parag={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={'/image/person.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/person3.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/computer.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/bitcoin2.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/bitcoin.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/person.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/bitcoin2.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={'/image/bitcoin2.jpg'} avatar={'/image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                </div>
                <div className="cta-btn">
                    <CtaButtonH name={'view more'} />
                </div>
            </SectionStyled>
        </GradientCardSectionStyled>
    )
}
//styled
const GradientCardSectionStyled = styled.div`
.cta-btn{
    padding-top: 30px;
    text-align: center;
}
`;
export default GradientCardSection;
