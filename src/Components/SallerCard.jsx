import React from 'react'
import styled from 'styled-components'
import Data from './Data/Data';

const SallerCard = () => {
    const { productData } = Data;
    return (
        <SallerCardStyled>
            {
                productData.map((item) => {
                    return <div key={item.id} className="SellerCard">
                            <div className="profile">
                                <img src={item.image} alt="...img" />
                                <div className="text">
                                    <h3>{item.name}</h3>
                                    <p>{item.currency}</p>
                                </div>
                            </div>
                        </div>
                })
            }
        </SallerCardStyled>
    )
}
//styled
const SallerCardStyled = styled.div`
border-radius: 20px;
background: rgb(255, 255, 255, 0.03);
transition: all .4s ease-in-out;
&:hover{
    transform: translateY(-10px);
}
.SellerCard{
    padding: 5%;
    .profile{
        display: flex;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 5%;
            object-fit: cover;
        }

    }
}
`;



export default SallerCard;
