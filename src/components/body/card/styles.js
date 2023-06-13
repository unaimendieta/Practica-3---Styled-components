import styled from "styled-components";

const CardSection = styled.section`
    background: url("./images/bg-main-desktop.png");
    width: 483px;
    height: 100vh;
    position: relative;
    @media screen and (max-width: 600px) {
        height: 240px;
        width: 100vw;

    }
`;
const CardContaier = styled.div`
    position: absolute;
    width: 447px;
    height: 245px;
    color: white;
    :first-child{
        background: url("./images/bg-card-front.png");
        left: 164px; 
        top: 20%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 32px;
    }
    :last-child{
        background: url("./images/bg-card-back.png");
        left: 258px;
        top: calc(20% + 300px);
    }
    @media screen and (max-width: 600px) {
  
        width: 286px;
         height: 157px;
         :first-child{
            background-size: cover;
            z-index: 2;
        left: 16px; 
        top: 126px;
        padding: 19px;
        }
        :last-child{
            background-size: cover;
            left: 73px;
            top: 32px;
        }
    }
`;
const CardCvc = styled.p`
    margin-left: 357px;
    margin-top: 111px;
    font-size: 14px;
    font-weight: 500;
    @media screen and (max-width: 600px) {
        
    margin-left: 229px;
    margin-top: 73px;
    font-size: 9px;

    }
`;
const CardNumberText = styled.h2`
    font-size: 28px;
    font-weight: 500;
    @media screen and (max-width: 600px) {    
        font-size: 18px;
    }

`;
const CardNameAndExpContainer = styled.div`
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        @media screen and (max-width: 600px) {    
            margin-top: 17px;
    }
`;
const CardNameAndExpText = styled.p`
        font-size: 14px;
        font-weight: 500;
@media screen and (max-width: 600px) {    
    font-size: 9px;
    }
`;


export {CardSection,CardContaier,CardCvc,CardNumberText,CardNameAndExpContainer,CardNameAndExpText};