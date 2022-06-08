import styled from 'styled-components';
import { Jumbotron, Main } from "../components";
import data from '../fixtures/jumbo.json';
import { GithubSVG, LinkSVG } from '../assets/icons';
import Fade from 'react-reveal/Fade';

const Home = () => {

    return (
        <Wrapper>
            <Main />
            <Fade bottom>
                <Heading>Technologies I'have been working with</Heading>
            </Fade>
            <Fade bottom>
                <div>
                    <p><Bold >Languages</Bold>: Python, Javascript, Java, C</p>
                    <p><Bold>Framework</Bold>: React, Django</p>
                    <p><Bold>Library</Bold>: Redux, Styled-components, Django rest framework</p>
                    <p><Bold>Database</Bold>: Postgresql, Mysql</p>
                    <p><Bold>Platform</Bold>: Linux </p>
                    <p><Bold>Version control</Bold>: Git, Github</p>
                </div>
            </Fade>
            <Heading>Stuff I've created</Heading>
            {data.map(item => (
                <Jumbotron direction={item.direction} key={item.id} >
                    <Fade bottom>

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

                    </Fade>
                    <Fade bottom>

                        <Jumbotron.Pane >
                            <Jumbotron.Image src={item['image-url']} />
                        </Jumbotron.Pane>
                    </Fade>

                </Jumbotron>
            ))}
            <Heading color='cyan'>Demo of some of my projects</Heading>
            <Heading fontSize='2rem'>Dropform</Heading>
            <Video controls> <source src="http://portfolio-vikas-lohar.s3.ap-south-1.amazonaws.com/dropform-demo.mov" /></Video>

            <Heading fontSize='2rem'>Vocall</Heading>
            <div style={{ marginLeft: "10rem" }} >

                <iframe frameBorder="0" src="https://vocall.vercel.app/voices/iframe/2c0a7311-f49d-4d26-8aae-b59ccf6d234a" title="vocall-widget" align="center"></iframe>
            </div>


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

const Bold = styled.span`
    color: lightgreen;
    font-weight: bold;
    font-size: 1.2rem;
`

const Heading = styled.h1`
position: relative;
    text-align: center;
    color: ${({ color }) => color || 'pink'};
    font-size: ${({ fontSize }) => fontSize || '3rem'};
    margin: 4rem 0;
    
`

const Video = styled.video`
    max-width:700px;
    border: 4px solid green;
    border-radius: 5px;
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
    margin-bottom: 10rem;
`



export default Home;