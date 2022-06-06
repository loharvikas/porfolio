import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    gap: 3rem;
`

export const Pane = styled.div``

export const Stack = styled.div`
    text-transform: uppercase;
    font-family: monospace;
    font-size: 11px;
    line-height: 1.5rem;
    color: #64ffda;
    margin-bottom: 1rem;
`

export const Title = styled.h1`
    font-size: ${({ size }) => size ? size : '2rem'};
    color:#64ffda;

`

export const SubTitle = styled.p`
    color: lightgrey;
    font-weight: 500;
    font-size:14px;
`


export const Text = styled.p`
    line-height: 1.6rem;
    &::selection {
        color: #fff;
    }
`

export const Link = styled.a`
    color: rgb(95,165,250);
    list-style: none;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
`

export const Image = styled.img`
    max-width: 600px;
    height: 400px;
    max-height: 600px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow:  0 10px 100px 40px rgba(16, 40, 97, 0.3);
`