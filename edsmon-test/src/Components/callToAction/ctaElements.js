import styled from 'styled-components';

export const CtaContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 5vh;
    gap:8px 8px; 

    justify-content: center; 
    align-content: start; 
    justify-items: center; 
    align-items: start; 
`

export const Separator = styled.div`
    display: inline-block;
    padding-top: 2em;
    height: 1vh;
`
export const CtaLogo = styled.section`
    
    background: url(${(props) => props.image || 'fallback-image.jpg'}) ;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 35px;

    margin-top: 1em;
`

export const CtaButton = styled.button`
    display: inline-block;
    width: 279px;
    height: 82px;
    background: #F778B9;
    border-radius: 17px;

    cursor: pointer; 

    &:hover,
    &:focus {
        box-shadow: 0 0.8em 0.8em -0.4em #F778B9;
        transform: translateY(-0.25em);
    }

`
export const CtaText = styled.p`

`