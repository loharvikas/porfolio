import { Container, Title, SubTitle, Text, Link, Image, Pane } from "./Jumbotron.styles";

export default function Jumbotron({ children, direction = 'row', restProps }) {
    return (
        <Container {...restProps} direction={direction}>{children}</Container>
    )
}
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Text = function JumbotronText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Jumbotron.Link = function JumbotronLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};


Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />;
};