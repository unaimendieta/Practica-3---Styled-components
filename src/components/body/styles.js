import styled from "styled-components";

const MainContainer = styled.section`
    
    display: grid;
    grid-template-columns: 483px 1fr ;
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 91px;

    }
`;


export {MainContainer};