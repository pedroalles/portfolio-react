import React, { useState, useEffect} from 'react'

export default function App(){
    const [repositories, setRepositories] = useState([])

    useEffect( async () => {
        const response = await fetch('https://api.github.com/users/pedroalles/repos')
        const data = await response.json()

        setRepositories(data)
    }, [])

    return(
        <ol>
            {repositories.map(repo => (
                <li key={repo.id}>
                    <dt> {repo.name}</dt> 
                    <dd> {repo.description === null ? '- No description.' : '- '+repo.description}</dd>
                </li>
            ))}
        </ol>
    )
}