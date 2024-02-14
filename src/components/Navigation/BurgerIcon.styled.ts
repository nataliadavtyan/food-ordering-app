import styled from "styled-components";

export const StyledBurgerIcon = styled.button<{open: boolean}>`
    position: absolute;
    top: 1.75em;
    right: 1.5em;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    z-index: 10;
    border: none;
    background-color: transparent;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({theme}) => theme.color.main};
        border-radius: 10px;
        transition: all 0.3s linear;
        /* sets the side of reference */
        transform-origin: right;

        &:first-child {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({open}) => open ? '0' : '1'};
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
    }
`