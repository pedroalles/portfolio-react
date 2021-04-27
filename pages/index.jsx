import Head from 'next/head'
import Card from '../src/components/Card'
import RandomEmoji from '../src/components/RandomEmoji'
import { Header, Emoji, Container, Title, Cards } from '../styles/home';
import React, { useState, useEffect} from 'react'

export default function Home() {
  const [repositories, setRepositories] = useState([])

    useEffect( async () => {
        const response = await fetch('https://api.github.com/users/pedroalles/repos')
        const data = await response.json()

        setRepositories(data)
    }, [])

  return (
      <Container>
        <Header>
          <Title>Welcome to my Portfolio</Title>
          <Emoji><RandomEmoji /></Emoji>
        </Header>
        <hr/>
        <Cards>
          {repositories.map(repo => (
            <Card 
              key={repo.id}
              title={repo.name} 
              description={repo.description === null ? '- No description.' : '- ' + repo.description} 
              img="../assets/images/image1.jpg" 
              alt=''/>
          ))}
        </Cards>
      </Container>
  )
}