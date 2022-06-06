import styled from 'styled-components';
import { Jumbotron, Main } from "../components";
import data from '../fixtures/jumbo.json';
import alertific from '../assets/images/alertific/first.png'
import { GithubSVG, LinkSVG } from '../assets/icons';

const Home = () => {
    return (
        <Wrapper>
            <Main />
            <Heading>Tools</Heading>
            <Heading>Stuff I've created</Heading>
            {data.map(item => (
                <Jumbotron direction={item.direction} key={item.id}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title size="3rem">{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
                        <Decorator>
                            <Jumbotron.Text>{item.description}</Jumbotron.Text>
                        </Decorator>
                        <Jumbotron.Stack>{item['tech-stack']}</Jumbotron.Stack>
                        <Jumbotron.Link href={item.github}><GithubSVG /></Jumbotron.Link>
                        <Jumbotron.Link href={item.link}><LinkSVG /></Jumbotron.Link>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={alertific} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
            <Heading>Get in touch</Heading>
            <Mail href="mailto: loharvikas13@gmail.com">Contact Me</Mail>
        </Wrapper>
    )
}



const Wrapper = styled.div`
max-width: 1100px;
height: 100%;
margin:1rem auto;
display: flex;
flex-direction: column;
align-items: center;
`



const Decorator = styled.div`
    background-color: #0c203e;
    box-shadow: 0 20px 30px -15px rgba(2,12,27,0.7);
    color:rgb(78, 92, 123);
    padding: 15px;
    z-index: 2;
    border-radius: 5px;
    position: relative;
    max-height: 250px;
    font-weight: 400;
    width: 500px;
    margin-bottom: 1rem;
    border: 2px solid lightgreen;
`

const Heading = styled.h1`
    position: relative;
    text-align: center;
    color: pink;
    font-size: 3rem;
    
`

const Mail = styled.a`
    width: 200px;
    text-align: center;
    text-transform: uppercase;
    font-family: monospace;
    padding: 1rem;
    border: 2px solid lightgreen;
    list-style: none;
    text-decoration: none;
    color:#64ffda;
    border-radius: 5px;
    transition: 200ms linear filter;

    &:hover {
        filter: brightness(1.5);
    }

`

export default Home;