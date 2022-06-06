import { Section, Avatar, Title, Text, Social, Link, Circle } from "./Main.styles";
import Profile from '../../assets/images/profile.jpg'
import { GithubSVG, LinkedInSVG, TwitterSVG, QuoraSVG } from "../../assets/icons";

export default function Main() {
    return (
        <Section>
            <Avatar src={Profile} />
            <Title>Hey there, 👋</Title>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex odio harum quam voluptatum exercitationem incidunt est deleniti facere reprehenderit expedita quidem et officiis sed, aspernatur voluptate dicta! Repudiandae excepturi dolorem veniam mollitia fugit eligendi voluptatum fuga aperiam impedit quos, sed delectus atque a quaerat ipsa itaque nostrum molestias officia sint repellat cum, ab corporis? Repudiandae neque saepe ipsa harum.</Text>
            <br />
            <br />
            <Social flexDirection="row">
                <Link href="#"><TwitterSVG /></Link>
                <Link href="#"><LinkedInSVG /></Link>
                <Link href="#"><GithubSVG /></Link>
                <Link href="#">< QuoraSVG /></Link>
            </Social>
        </Section>
    )
}