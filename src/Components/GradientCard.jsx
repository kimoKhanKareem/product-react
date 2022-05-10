import React from 'react';
import styled from 'styled-components';


const GradientCard = ({ image, avatar, name, price, title, ctaButtonH }) => {
    return (
        <GradientCardStyled>
            <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="..." />
                        <div className="name">
                            <img src={avatar} alt="..." />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h6 className="card-name">{title}</h6>
                        <p>price
                            <span className="price">
                                {price}
                            </span>
                        </p>
                        <p>
                            Highest Bid : &nbsp;
                            <span className="price">
                                {price}
                            </span>
                        </p>
                        <div className="duration">
                            <p>
                                <img  src= '/image/time.svg'   alt="..." />
                                 7 Hours Age
                            </p>    
                            <p> 
                                <img  src= '/image/heart.svg'  alt="..." />
                                150 likes
                            </p>
                        </div>
                        <div className="cta-btns">
                            {ctaButtonH}
                        </div>
                    </div>
                </div>
            </div>
            
        </GradientCardStyled>
    )
}
//styled
const GradientCardStyled = styled.div`
border-radius: 20px;
font-size: 14px;
background: #7f41DB;
animation: gradient 5s infinite;
.g-card{
    margin: 5px;
    .inner-content{
        background-color: #091026;
        padding:  15px;
        border-radius: 20px;
        .image{
            width: 100%;
            position: relative;
            img:first-child{
                width: 100%;
                object-fit: cover;
                height: 300px;
                border-radius: 10px;
            }
            .name{
                position: absolute;
                left: 50%;
                bottom: -22px;
                background-color: #03091f;
                display: flex;
                align-items: center;
                transform: translateX(-50%);
                width: 75%;
                padding: 5px;
                border: 1px solid rgba(255, 255, 255, 0.8);
                border-radius: 50px;
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 20px;
                }
            }
        }
        .card-content{
            padding-top: 30px;
            .card-name{
                font-size: 14px;
                padding-bottom: 10px;
            }
            .price{
                color: #6BBE92;
            }
            .duration{
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px dashed rgh(255, 255, 255, 0.2);
                display :flex ;
                justify-content: space-between;
                p{
                    display: flex;
                    align-items: center;
                    img{
                        object-fit: cover;
                        width: 18px;
                        margin-right: 15px;
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }
    .cta-btns{
        width: 100%;
        a{
            margin: 12px 0;
            display: inline-block;
            width: 100%;
            text-align: center;
        }
    }
}
`;
export default GradientCard;
