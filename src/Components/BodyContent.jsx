import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import BlogSection from './BlogSection';
import DemoSection from './DemoSection';
import GradientCardSection from './GradientCardSection';
import MainTitle from './MainTitle';
import SallerCard from './SallerCard';
import Footer from './Footer';


const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'} parag={'lored;vjhbveslmsclk biudoisfnkjbdwenckc.'}/>
                <div className="sallerCards">
                    <SallerCard />
                    <SallerCard />
                    <SallerCard />
                </div>
                <BlogSection />
                <GradientCardSection />
                <DemoSection />
            </InnerLayout>
            <Footer />
        </BodyContentStyled>
    )
}
//styled-components
const BodyContentStyled =styled.section`
.sallerCards{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 3%;
    margin: 4% 0;
}
`;
export default BodyContent
