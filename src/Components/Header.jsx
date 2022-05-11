import React from 'react'
import styled from 'styled-components';
import SmaillHeading from './SmaillHeading'
import CtaButtonH from './CtaButtonH';
import { Tablet, MobilePro } from '../responsive';



const Header = () => {
    return (
        <SHeader>
            <div className="left">
                <SmaillHeading title={'All Digital Currencies in One Place'} Before={'Before'} />
                <h3 className="texth">
                    All NFTs You need in One Marketplace
                    The Best Place to Collect , Buy and Sell <span className='GradientText'>Awesome NFTs</span>
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem.
                    Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus
                </p>
                <div className="btn">
                    <CtaButtonH name={"Discover More"} />
                    <CtaButtonH name={"Get Help"} />
                </div>
            </div>
            <div className="right">
                <img src="image/bchain.png" alt="..img" />
            </div>

        </SHeader>
    )
}

const SHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${ MobilePro({  gridTemplateColumns: 'repeat(1, 1fr)' }) }
    width: 100%;
    height: 100%;
    .left{
        display: flex;
        justify-content: center;
        flex-direction: column;
        ${ Tablet({fontSize: '15px'}) }
        .texth{
            padding: 20px 0;
            ${ Tablet({padding: '15px 0', fontSize:'13px'}) }
        }
        .btn{
            margin: 20px 0;
        }
    }
    .right{
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
        ${ Tablet({width: '40%'}) }
        ${ MobilePro({display:'none'}) }
    }
`;

export default Header
