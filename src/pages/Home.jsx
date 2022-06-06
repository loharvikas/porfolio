import styled from 'styled-components';
import { Jumbotron, Main } from "../components";
import data from '../fixtures/jumbo.json';
import alertific from '../assets/images/alertific/first.png'

const Home = () => {
    return (
        <Wrapper>
            <Main />
            {data.map(item => (
                <Jumbotron direction={item.direction} key={item.id}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
                        <Jumbotron.Text>{item.description}</Jumbotron.Text>
                        <Jumbotron.Link href={item.link}>Website</Jumbotron.Link>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={alertific} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Wrapper>
    )
}



const Wrapper = styled.div`
max-width: 1400px;
height: 100%;
margin:1rem auto;
display: flex;
flex-direction: column;
`


export default Home;