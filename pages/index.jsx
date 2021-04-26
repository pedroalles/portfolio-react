import Head from 'next/head'
import Card from '../src/components/Card'
import { Container, Title, Cards } from '../styles/home';

export default function Home() {
  return (
      <Container>
        <Title>Welcome to my Portfolio</Title>
        <hr/>
        <Cards>
          <Card title='Project 1' img="../assets/images/img1.png" alt=''/>
          <Card title='Project 2' img="../assets/images/img1.png" alt=''/>
          <Card title='Project 3' img="../assets/images/img1.png" alt=''/>
          <Card title='Project 4' img="../assets/images/img1.png" alt=''/>
          <Card title='Project 5' img="../assets/images/img1.png" alt=''/>
          <Card title='Project 6' img="../assets/images/img1.png" alt=''/>
        </Cards>
      </Container>
  )
}
