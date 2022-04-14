import styled from 'styled-components';

export const NavContainer = styled.div`
    display: grid; 
    grid-template-columns: 0.10fr 1fr 0.10fr; 
    grid-template-rows: 64px; 
    gap: 8px 8px; 
    grid-template-areas: 
        "menu logo search";
        
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    align-items:center; 
`
export const Menu = styled.div`
    grid-area: menu; 
    cursor: pointer;
`
export const Logo = styled.section`
    grid-area: logo;

    background: url(${(props) => props.image || 'fallback-image.jpg'}) left;
    background-size: cover;
    background-repeat: no-repeat;

    width: 140.63px;
    height: 30px;
`
export const Search = styled.div`
    grid-area: search;
    justify-content: right;

    cursor: pointer;
`