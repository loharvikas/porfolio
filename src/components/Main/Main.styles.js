import styled from 'styled-components';


export const Section = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 2rem;
    text-align: center;
    margin-top: 5rem;
`

export const Title = styled.h1`
    font-size: 2rem;
`

export const Text = styled.div`
    font-size: 1rem;
    color: var(--SECONDARY-TEXT-COLOR);
    line-height: 1.5rem;

`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin-top: 1.5rem;
    position: relative;
`

export const Link = styled.a`
    list-style: none;
    cursor: pointer;
`

export const Circle = styled.div`
    width:500px;
    height: 500px;
    background: radial-gradient(closest-side,#2dd4bf,rgba(233,168,2,0));
    -webkit-animation: traverse-up-left 10s ease-in-out infinite alternate;
    animation: traverse-up-left 10s ease-in-out infinite alternate;
    transform: translateY(-200px) translateX(-350px) rotate(180deg);
    z-index: -1
`