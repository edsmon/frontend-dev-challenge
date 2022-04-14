import styled from 'styled-components';

export const AdFrameContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 10vh;
    gap:8px 8px; 

    justify-content: center; 
    align-content: start; 
    justify-items: center; 
    align-items: start; 


        
`
export const BgAdFrame = styled.section`

    background: url(${(props) => props.image || 'fallback-image.jpg'}) ;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 10%;

    width: 469px;
    height: 360px;
`
