import { Section, Avatar, Title, Text, Social, Link, Span } from "./Main.styles";
import Profile from '../../assets/images/profile.jpg'
import { GithubSVG, LinkedInSVG, LeetcodeSVG, QuoraSVG, UpworkSVG } from "../../assets/icons";
import Fade from "react-reveal/Fade";

export default function Main() {
    return (
        <Section >
            <Fade bottom>
                <Avatar src={Profile} data-aos="fade-up" />
            </Fade>
            <Title>Hey there, 👋</Title>
            <Fade bottom>
                <Text data-aos="fade-up">I'm <Span>Vikas Lohar</Span>, a self taught Full stack developer, <Span>Freelancer</Span> and student. I am sophomore studying Computer Science and Engineering from U.V.P.C.E . I've been building stuff on web since I wrote my first "Hello World" a year ago. I love building stuff using <Span>Django</Span> and <Span>React</Span> amazing combination right ?. You can find my relevant profiles on different platforms down here.</Text>
            </Fade>
            <br />
            <br />
            <Social flexDirection="row" data-aos="fade-up">
                <Link href="https://leetcode.com/loharvikas13/" target="_blank"><LeetcodeSVG /></Link>
                <Link href="https://www.linkedin.com/in/vikas-lohar-263566154/" target="_blank"><LinkedInSVG /></Link>
                <Link href="https://github.com/loharvikas" target="_blank"><GithubSVG /></Link>
                <Link href="https://www.quora.com/profile/Vikas-Lohar-6" target="_blank">< QuoraSVG /></Link>
                <Link href="https://www.upwork.com/freelancers/~0174a4780ee609f3ba" target="_blank">< UpworkSVG /></Link>
            </Social>
        </Section>
    )
}

