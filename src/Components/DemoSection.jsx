import React from 'react';
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import GradientCard from './GradientCard';
import CtaButtonH from './CtaButtonH';


const DemoSection = () => {
    const ctaButtonH = <CtaButtonH name={'Place bid'} />
    return (
        <DemoSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Live Demonstration'} subtitle={'Live Demonstration'} parag={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'}/>
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={'image/person.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  ctaButtonH={ctaButtonH}/>
                    <GradientCard image={'image/person3.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  ctaButtonH={ctaButtonH}/>
                    <GradientCard image={'image/computer.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButtonH={ctaButtonH} />
                    <GradientCard image={'image/bitcoin2.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButtonH={ctaButtonH}/>
                    <GradientCard image={'image/bitcoin.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  ctaButtonH={ctaButtonH}/>
                    <GradientCard image={'image/person.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButtonH={ctaButtonH}/>
                    <GradientCard image={'image/bitcoin2.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButtonH={ctaButtonH}/>
                    <GradientCard image={'image/bitcoin2.jpg'} avatar={'image/avatar.png'} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButtonH={ctaButtonH} />
                </div>
            </SectionStyled>
        </DemoSectionStyled>
    )
}
//styled
const DemoSectionStyled = styled.div`
`;
export default DemoSection;
