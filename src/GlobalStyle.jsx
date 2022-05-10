import { createGlobalStyle } from "styled-components";
import { Tablet, MobilePro } from './responsive';



const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
body{
    background-color: #03091f;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
}   
a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
} 
p{
    line-height: 27px;
    ${ Tablet({lineHeight: '22px'}) }

}
.Before{
    padding-left: 8%;
    position: relative;
    &::before{
        content:'';
        position: absolute;
        left:0;
        top:50%;
        width: 35px;
        height: 2px;
        background-color: #395ff6;
        ${ Tablet({width: '20px'}) }

    }
}
.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    display: inline-block;
}
.title-con{
    text-align: center;
    width: 80%;
    margin: 0 auto;
    line-height: 35px;
    ${ MobilePro ({width:'100%', marginTop: '30%'}) }

}
.gradient-cards-con{
    padding: 25px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;
}
`;

export default GlobalStyle;