import { Section, Avatar, Title, Text, Social, Link, } from "./Main.styles";
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
                <Text data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex odio harum quam voluptatum exercitationem incidunt est deleniti facere reprehenderit expedita quidem et officiis sed, aspernatur voluptate dicta! Repudiandae excepturi dolorem veniam mollitia fugit eligendi voluptatum fuga aperiam impedit quos, sed delectus atque a quaerat ipsa itaque nostrum molestias officia sint repellat cum, ab corporis? Repudiandae neque saepe ipsa harum.</Text>
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