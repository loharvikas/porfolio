import { Wrapper, Section, NavBar, Avatar } from "./Home.styles";
import Profile from '../assets/images/profile.jpg'

console.log(Profile)
const Home = () => {
    return (
        <Wrapper>
            <Section>
                <NavBar>
                    <Avatar src={Profile} height="40px" width="40px" />
                    <button>Change</button>
                </NavBar>
            </Section>
        </Wrapper>
    )
}


export default Home;