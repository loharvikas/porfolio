import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin:1rem auto;
    display: flex;
    flex-direction: column;
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`

export const Section = styled.section`
    min-height: 100%;
`

export const Title = styled.h1`
    font-size: ${({ fontSize }) => fontSize};
`