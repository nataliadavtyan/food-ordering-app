import styled from "styled-components";
// import { BurgerProps } from "./Burger";

export const StyledBurger = styled.div<{open: boolean}>`
    position: absolute;
    top: 5%;
    right: 2rem;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    /* background-color: transparent; */
    /* background-color: ${({open}) => open ? "green" : "yellow"}; */
    cursor: pointer;
    z-index: 10;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        display: flex;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({theme}) => theme.color.main};
        border-radius: 10px;
        transition: all 0.3s linear;
        /* unclear */
        transform-origin: 1px;

        &:first-child {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({open}) => open ? '0' : '1'};
            /* transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'}; */
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`