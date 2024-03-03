import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    /* why do we need the html selector? */
    html, body {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        /* line-height: 1.5; */
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.color.bgColor};
        height: 100vh;
        overflow-x: hidden;
    }

    button {
        border: none;
        background-color: transparent;
        font-family: inherit;
        padding: 0;
        cursor: pointer;
    }

    img {
        display: block;
    }
`;

export default GlobalStyle;
