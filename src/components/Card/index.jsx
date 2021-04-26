import { Container, Title, Image } from './styles'

const Card = (props) => (
    <Container>
        <Title>
            {props.title}
        </Title>
        <Image
            src={props.img}
            alt={props.alt}
        />
    </Container>
)

export default Card