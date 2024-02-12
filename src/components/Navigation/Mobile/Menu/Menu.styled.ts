import styled from "styled-components";
import { MenuProps } from "./Menu";

export const StyledMenu = styled.nav<MenuProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: lightgray;
    /* background: ${({open}) => open ? "green" : "yellow"}; */
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    
    @media (max-width: ${({theme}) => theme.breakpoint.md}) {
        width: 100%;
        /* display: ${({open}) => open ? "flex" : "none"} */
    }

    ul {
        list-style: none;
        /* height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4vh;
        margin-top: 0.875em; */
        /* color: ${({ theme }) => theme.color.text}; */
        /* text-align: left; */
    }

    a {
        text-decoration: none;
        color: inherit;
        /* color: white; */
        /* font-size: 7vw; */
        font-size: 2rem;
        font-weight: 400;
        /* width: 100%; */
        transition: transform 0.3s linear;

        /* @media (max-width: ${({theme}) => theme.breakpoint.md}) {

        } */
    }
`