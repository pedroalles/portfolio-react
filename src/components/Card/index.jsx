import { Container, Title, Description, Image } from './styles'

const Card = (props) => (
    
        <Container>
            <a href={props.link} target="_blank" class="button">
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
            </a>
        </Container>
)

export default Card