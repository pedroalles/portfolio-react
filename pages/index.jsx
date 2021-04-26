import Head from 'next/head'
import Card from '../src/components/Card'
import RandomEmoji from '../src/components/RandomEmoji'
import { Header, Emoji, Container, Title, Cards } from '../styles/home';

export default function Home() {
  return (
      <Container>
        <Header>
        <Title>Welcome to my Portfolio</Title>
        <Emoji><RandomEmoji /></Emoji>
        </Header>
        <hr/>
        <Cards>
          <Card title='Project 1' img="../assets/images/image1.jpg" alt=''/>
          <Card title='Project 2' img="../assets/images/image1.jpg" alt=''/>
          <Card title='Project 3' img="../assets/images/image1.jpg" alt=''/>
          <Card title='Project 4' img="../assets/images/image1.jpg" alt=''/>
          <Card title='Project 5' img="../assets/images/image1.jpg" alt=''/>
          <Card title='Project 6' img="../assets/images/image1.jpg" alt=''/>
        </Cards>
      </Container>
  )
}
