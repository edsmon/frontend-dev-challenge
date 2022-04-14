import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: grid; 
    grid-template-columns: 1.5fr; 
    grid-template-rows: 70vh 15vh; 
    gap:0px 8px; 
    grid-template-areas: 
        "heroImg"
        "heroH1"; 
    
    align-content: center;
    
    @media only screen and (max-width: 820px){
        grid-template-rows: 50vh 12.5vh;
    }
`

export const HeroImg = styled.section`
    grid-area: heroImg;
    
    background: url(${(props) => props.image || 'fallback-image.jpg'}) left;
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;

    @media only screen and (max-width: 820px){
        background-position: center center;
    }

    
`

export const HeroH1Containter = styled.div`

    grid-area: heroH1;

    position: relative;
    background: #F1F1F1;
    box-shadow: 0px 6px 6px 2px rgba(0, 0, 0, 0.25);
    text-align: center; 
`
export const HeroH1 = styled.h1`

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

`