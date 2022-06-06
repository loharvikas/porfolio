import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    direction: ${({ direction }) => direction};
    justify-content: space-between;
    align-items: center;
    height: 100vh;
`

export const Pane = styled.div``

export const Title = styled.h1`
    font-size: ${({ size }) => size ? size : '2rem'};
`

export const SubTitle = styled.p`
    color: lightgrey;
    font-weight: 500;
    font-size:14px;
`

export const Text = styled.p`
    color: var(--PRIMARY-TEXT-COLOR);
    font-weight: 500;
`

export const Link = styled.a`
color: rgb(95,165,250);
list-style: none;
`

export const Image = styled.img`
max-width: 800px;
max-height: 800px;
margin-left: 100px;
overflow: hidden;
border-radius: 12px;
box-shadow: 0px 15px 100px 40px rgba(95,165,250, 0.2),0px 0px 1px 0 #525252;
`