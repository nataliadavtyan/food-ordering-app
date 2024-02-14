import styled from "styled-components";

export const StyledBurgerMenu = styled.nav<{open: boolean}>`
    width: 25%;
    background: ${({theme}) => theme.color.menuBg};
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    overflow-x: hidden;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    
    @media (max-width: ${({theme}) => theme.breakpoint.md}) {
        width: 100%;
    }
    
    ul {
        color: white;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 2em;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 2rem;
        font-weight: 400;
        transition: transform 0.3s linear;
    }
`