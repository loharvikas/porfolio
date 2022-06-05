import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root {
        --PRIMARY-COLOR: #111827;
    }

        body, html {
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        position: relative;
        background-color: var(--PRIMARY-COLOR);
        overflow-x: hidden;
    }
    
`

