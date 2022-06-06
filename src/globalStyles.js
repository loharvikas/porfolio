import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root {
        --PRIMARY-COLOR: #111827;
        --PRIMARY-TEXT-COLOR: #fff;
        --SECONDARY-TEXT-COLOR: #cbd5e1;
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
        color: var(--PRIMARY-TEXT-COLOR);
    }
    
`



export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
`