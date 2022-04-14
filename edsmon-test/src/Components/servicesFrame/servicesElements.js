import styled from 'styled-components';

export const ServicesContainer = styled.div`
    margin-top:5em;
    height: 50vh;

    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 12px 12px; 
    grid-template-areas: 
        "Service1 Service2 Service3"; 
    grid-area: Services; 
    
    justify-content: center; 
    align-content: center; 
    justify-items: center; 
    align-items: center; 


    @media only screen and (max-width: 900px){
        height: auto;

        grid-template-columns: 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        grid-template-areas: 
        "Service1" 
        "Service2"
        "Service3"
        ; 
    }
`
