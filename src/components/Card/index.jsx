import { Container, Title, Description, Image } from './styles'

const Card = (props) => (
    <Container>
        <Title>
            {props.title}
        </Title>
        <Description>
            {props.description}
        </Description>
        <Image
            src={props.img}
            alt={props.alt}
        />
    </Container>
)

export default Card